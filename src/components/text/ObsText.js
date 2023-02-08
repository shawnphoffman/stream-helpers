'use client'

import { memo, useEffect, useMemo, useState } from 'react'

import { TextStyle } from './TextStyle'

// window.obsstudio

const ObsText = ({ textStyle = TextStyle.JUMP, debug = false, inTime = 15, outTime = 45, children }) => {
	const [visible, setVisible] = useState(true)

	useEffect(() => {
		const delay = visible ? inTime : outTime
		// console.log('setTimeout', { visible, delay })
		let timer = setTimeout(() => setVisible(visible => !visible), delay * 1000)
		return () => {
			// console.log('clearTimeout', visible)
			clearTimeout(timer)
		}
	}, [inTime, outTime, visible])

	const isVisible = useMemo(() => {
		return debug || visible
	}, [debug, visible])

	return (
		// <div className={debug ? 'obs-text' : 'animate obs-text'}>
		<div className={isVisible ? 'obs-text' : 'obs-text hidden'}>
			<div>
				{textStyle === TextStyle.GRADIENT && <div className="gradient">{children}</div>}
				{textStyle === TextStyle.JUMP && (
					<div className="jump">
						{[...children].map((t, i) => (
							<span key={i} style={{ '--i': i + 1 }}>
								{t}
							</span>
						))}
					</div>
				)}
				{textStyle === TextStyle.WAVE && (
					<div className="wave">
						<div>{children}</div>
						<div>{children}</div>
					</div>
				)}
				{textStyle === TextStyle.NONE && <div>{children}</div>}
			</div>
		</div>
	)
}

export default memo(ObsText)
