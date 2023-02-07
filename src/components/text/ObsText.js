import { memo } from 'react'

import { TextStyle } from './TextStyle'

// window.obsstudio

const ObsText = ({ textStyle = TextStyle.JUMP, debug = false, children }) => {
	return (
		<div className={debug ? 'obs-text' : 'animate obs-text'}>
			{/* <Wow> */}
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
				{/* </Wow> */}
			</div>
		</div>
	)
}

export default memo(ObsText)
