import { memo, useMemo } from 'react'

import ObsText from '@/components/text/ObsText'
import { TextStyle } from '@/components/text/TextStyle'

/*
████████╗███████╗██╗  ██╗████████╗     ██████╗ ██████╗ ██████╗ ███████╗
╚══██╔══╝██╔════╝╚██╗██╔╝╚══██╔══╝    ██╔════╝██╔═══██╗██╔══██╗██╔════╝
   ██║   █████╗   ╚███╔╝    ██║       ██║     ██║   ██║██████╔╝█████╗
   ██║   ██╔══╝   ██╔██╗    ██║       ██║     ██║   ██║██╔══██╗██╔══╝
   ██║   ███████╗██╔╝ ██╗   ██║       ╚██████╗╚██████╔╝██║  ██║███████╗
   ╚═╝   ╚══════╝╚═╝  ╚═╝   ╚═╝        ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝
*/

const Render = ({ searchParams }) => {
	const text = useMemo(() => {
		return searchParams?.text || 'Please consider following'
	}, [searchParams])

	const style = useMemo(() => {
		return TextStyle[searchParams?.style?.toUpperCase()] || TextStyle.JUMP
	}, [searchParams])

	const debug = useMemo(() => {
		return searchParams?.debug === 'true'
	}, [searchParams])

	const inTime = useMemo(() => {
		return searchParams?.in || 15
	}, [searchParams])

	const outTime = useMemo(() => {
		return searchParams?.out || 45
	}, [searchParams])

	return (
		<ObsText textStyle={style} debug={debug} inTime={inTime} outTime={outTime}>
			{text}
		</ObsText>
	)
}

export default memo(Render)

export const dynamic = 'force-dynamic'
