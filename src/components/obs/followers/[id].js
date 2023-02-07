import { memo, useMemo } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'

import ObsText, { TextStyle } from 'components/obs/ObsText'

const fetcher = (...args) => fetch(...args).then(res => res.json())

// Server data fetch
export async function getServerSideProps(context) {
	const { id } = context.params
	const { goal, interval } = context?.query
	const { host } = context.req?.headers

	// console.log({ id, goal, host })

	const scheme = host.includes('localhost') ? 'http' : 'https'
	const res = await fetch(`${scheme}://${host}/api/twitch/followers/${id}?countOnly=true`)
	const json = await res.json()
	const count = json.total

	context.res.setHeader('Cache-Control', 'public, s-maxage=600, stale-while-revalidate=300')

	return {
		props: {
			id,
			goal: goal?.toString() || null,
			count: (count || 0).toString(),
			interval: interval || 300000, // 5 minutes
		},
	}
}

const Followers = ({ id, goal, count, interval }) => {
	const { query } = useRouter()

	const { data, error, isLoading } = useSWR(`/api/twitch/followers/${id}?countOnly=true`, fetcher, {
		refreshInterval: interval,
		fallbackData: { total: count },
	})

	const followerCount = useMemo(() => {
		return data?.total
	}, [data?.total])

	const text = useMemo(() => {
		return goal ? `${followerCount}/${goal}` : followerCount
	}, [followerCount, goal])

	const prefix = useMemo(() => {
		return query?.prefix || ''
	}, [query?.prefix])

	const style = useMemo(() => {
		return TextStyle[query?.style?.toUpperCase()] || TextStyle.NONE
	}, [query])

	const finalText = useMemo(() => {
		return prefix ? `${prefix} ${text}` : text
	}, [prefix, text])

	if (!count) {
		return null
	}

	if (error) return <pre>Error: {JSON.stringify(error, null, 2)}</pre>
	if (isLoading) return <div>Loading...</div>

	return (
		<>
			<ObsText textStyle={style} debug={true}>
				{finalText}
			</ObsText>
			{/* <div>
				<pre>
					<ul>
						<li>{JSON.stringify(data, null, 2)}</li>
						<li>Error: {JSON.stringify(error, null, 2)}</li>
						<li>Loading: {isLoading}</li>
					</ul>
				</pre>
			</div> */}
		</>
	)
}

export default memo(Followers)
