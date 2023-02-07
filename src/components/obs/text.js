import { memo, useMemo } from 'react'
import { useRouter } from 'next/router'

import ObsText, { TextStyle } from 'components/obs/ObsText'

const Text = () => {
	const { query } = useRouter()

	const text = useMemo(() => {
		return query?.text || 'Please consider following'
	}, [query])

	const style = useMemo(() => {
		return TextStyle[query?.style?.toUpperCase()] || TextStyle.JUMP
	}, [query])

	const debug = useMemo(() => {
		return query?.debug === 'true'
	}, [query])

	return (
		<ObsText textStyle={style} debug={debug}>
			{text}
		</ObsText>
	)
}

export default memo(Text)
