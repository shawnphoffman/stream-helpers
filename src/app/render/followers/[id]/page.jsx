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

export default async function Page({ searchParams, params }) {
	const { id } = params

	// TODO
	// const interval = searchParams?.interval || 300000 // 5 mins
	const interval = 300000 // 5 mins

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

	return <TwitchPoller goal={goal} poller={url} count={followerCount} interval={interval} style={style} prefix={prefix} debug={debug} />
}
