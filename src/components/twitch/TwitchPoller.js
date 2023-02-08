'use client'

import { memo, useMemo } from 'react'
import useSWR from 'swr'

import ObsText from '@/components/text/ObsText'

/*
██████╗  ██████╗ ██╗     ██╗     ███████╗██████╗
██╔══██╗██╔═══██╗██║     ██║     ██╔════╝██╔══██╗
██████╔╝██║   ██║██║     ██║     █████╗  ██████╔╝
██╔═══╝ ██║   ██║██║     ██║     ██╔══╝  ██╔══██╗
██║     ╚██████╔╝███████╗███████╗███████╗██║  ██║
╚═╝      ╚═════╝ ╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝
*/

const fetcher = (...args) => {
	return fetch(...args).then(res => res.json())
}

const TwitchPoller = ({ goal, interval, count, poller, prefix, style, debug, inTime, outTime }) => {
	const { data, error, isLoading } = useSWR(poller, fetcher, {
		refreshInterval: interval,
		fallbackData: { total: count },
	})

	const followerCount = useMemo(() => {
		return data?.total
	}, [data?.total])

	const text = useMemo(() => {
		return goal ? `${followerCount}/${goal}` : `${followerCount}`
	}, [followerCount, goal])

	const finalText = useMemo(() => {
		return prefix ? `${prefix} ${text}` : text
	}, [prefix, text])

	if (error) return <pre>Error: {JSON.stringify(error, null, 2)}</pre>
	if (isLoading) return <div>Loading...</div>

	return (
		<ObsText textStyle={style} debug={debug} inTime={inTime} outTime={outTime}>
			{finalText}
		</ObsText>
	)
}

export default memo(TwitchPoller)
