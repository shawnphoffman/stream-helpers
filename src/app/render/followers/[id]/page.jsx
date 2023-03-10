import { TextStyle } from '@/components/text/TextStyle'
import TwitchPoller from '@/components/twitch/TwitchPoller'

const fetchUrl = process.env.TWITCH_FOLLOWER_API_URL

/*
███████╗ ██████╗ ██╗     ██╗      ██████╗ ██╗    ██╗███████╗██████╗ ███████╗
██╔════╝██╔═══██╗██║     ██║     ██╔═══██╗██║    ██║██╔════╝██╔══██╗██╔════╝
█████╗  ██║   ██║██║     ██║     ██║   ██║██║ █╗ ██║█████╗  ██████╔╝███████╗
██╔══╝  ██║   ██║██║     ██║     ██║   ██║██║███╗██║██╔══╝  ██╔══██╗╚════██║
██║     ╚██████╔╝███████╗███████╗╚██████╔╝╚███╔███╔╝███████╗██║  ██║███████║
╚═╝      ╚═════╝ ╚══════╝╚══════╝ ╚═════╝  ╚══╝╚══╝ ╚══════╝╚═╝  ╚═╝╚══════╝
*/

export default async function Page(props) {
	const { params, searchParams } = props
	const { id } = params

	const interval = searchParams?.interval || 300000 // 5 mins
	const inTime = searchParams?.in || 15 // 15 seconds
	const outTime = searchParams?.out || 45 // 45 seconds

	const goal = searchParams?.goal?.toString() || null
	const prefix = searchParams?.prefix || ''
	const style = TextStyle[searchParams?.style?.toUpperCase()] || TextStyle.NONE
	const debug = searchParams?.debug === 'true'

	const url = `${fetchUrl}${id}?countOnly=true`

	// https://beta.nextjs.org/docs/api-reference/fetch
	const response = await fetch(url, {
		next: { revalidate: 120 }, // 2 minutes
	})
	const json = await response.json()
	const followerCount = json.total

	return (
		<TwitchPoller
			goal={goal}
			poller={url}
			count={followerCount}
			interval={interval}
			style={style}
			prefix={prefix}
			debug={debug}
			inTime={inTime}
			outTime={outTime}
		/>
	)
}

export const dynamic = 'force-dynamic'
