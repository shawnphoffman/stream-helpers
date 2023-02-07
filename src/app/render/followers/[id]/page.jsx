import { memo, useMemo } from 'react'

import ObsText from '@/components/text/ObsText'
import { TextStyle } from '@/components/text/TextStyle'
/*
███████╗ ██████╗ ██╗     ██╗      ██████╗ ██╗    ██╗███████╗██████╗ ███████╗
██╔════╝██╔═══██╗██║     ██║     ██╔═══██╗██║    ██║██╔════╝██╔══██╗██╔════╝
█████╗  ██║   ██║██║     ██║     ██║   ██║██║ █╗ ██║█████╗  ██████╔╝███████╗
██╔══╝  ██║   ██║██║     ██║     ██║   ██║██║███╗██║██╔══╝  ██╔══██╗╚════██║
██║     ╚██████╔╝███████╗███████╗╚██████╔╝╚███╔███╔╝███████╗██║  ██║███████║
╚═╝      ╚═════╝ ╚══════╝╚══════╝ ╚═════╝  ╚══╝╚══╝ ╚══════╝╚═╝  ╚═╝╚══════╝
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

	return (
		<div>
			<h1>Render FOLLOWERS</h1>
			<ObsText style={style} debug={debug}>
				{text}
			</ObsText>
		</div>
	)
}

export default memo(Render)
