import { memo, useCallback, useEffect, useState } from 'react'

// import { styled } from "linaria/react";
import ObsText, { TextStyle } from 'src/components/obs/ObsText'

const ExampleContainer = styled.div`
	width: 350px;
`

const Label = styled.label`
	margin: 0px 8px;
`

const Dropdown = styled.select`
	margin: 8px 0px;
`

export const NativeControl = styled.input`
	margin: 0;
	margin-bottom: 8px;
	padding: 12px 16px;
	line-height: 1.2;
	text-align: start;
	text-indent: 0px;
	text-transform: none;
	word-spacing: 0px;
	border-style: solid;
	border-width: 0;
	opacity: 1;
	flex: 1;
	user-select: all;

	&:focus {
		outline-style: none;
		box-shadow: none;
	}

	&:read-only {
		color: grey;
		user-select: all;
	}

	width: 100%;
	display: block;
	max-width: 720px;
`

const Help = () => {
	const [debug, setDebug] = useState(true)
	const [originalText, setOriginal] = useState('Please consider following!')
	const [textStyle, setTextStyle] = useState(TextStyle.JUMP)
	const [encoded, setEncoded] = useState('')

	const handleTextChange = useCallback(e => {
		const value = e.target.value
		setOriginal(value)
	}, [])

	const handleStyleChange = useCallback(e => {
		const value = e.target.value
		setTextStyle(value)
	}, [])

	const handleDebugChange = useCallback(e => {
		const value = e.target.checked
		setDebug(value)
	}, [])

	useEffect(() => {
		const temp = encodeURIComponent(originalText)
		setEncoded(temp)
	}, [originalText])

	return (
		<>
			<h1>OBS Source Help</h1>
			<hr />

			<h2>Twitch User ID Lookup</h2>
			<a href="/obs/twitch/lookup" target="_blank" rel="noreferrer">
				Click here to lookup your Twitch user ID
			</a>

			<hr />

			<h2>Animated Text</h2>
			<div>Useful for displaying basic animated text (e.g. &quot;Please follow&quot;)</div>

			<h3>Options</h3>
			<ul>
				<li>Text: The text to display</li>
				<li>Style: The style of text animation. See below</li>
				<li>Debug: Enabling this will prevent the text from fading in and out</li>
			</ul>

			<h3>Examples</h3>
			<ExampleContainer>
				<ObsText textStyle={TextStyle.GRADIENT} debug>
					Gradient Style
				</ObsText>
				<ObsText textStyle={TextStyle.JUMP} debug>
					Jump Style
				</ObsText>
				<ObsText textStyle={TextStyle.WAVE} debug>
					Wave Style
				</ObsText>
				<ObsText textStyle={TextStyle.NONE} debug>
					None Style
				</ObsText>
			</ExampleContainer>

			<h3>Text Builder</h3>
			<NativeControl type="text" onChange={handleTextChange} value={originalText} />
			<Dropdown onChange={handleStyleChange} defaultValue={textStyle}>
				<option>{TextStyle.GRADIENT}</option>
				<option>{TextStyle.JUMP}</option>
				<option>{TextStyle.WAVE}</option>
				<option>{TextStyle.NONE}</option>
			</Dropdown>
			<div>
				<input type="checkbox" name="debug" onChange={handleDebugChange} checked={debug} />
				<Label>Always visible?</Label>
			</div>
			<h4>Preview</h4>
			<ObsText textStyle={textStyle} debug={debug}>
				{originalText || ''}
			</ObsText>

			<h4>URL Preview</h4>
			<pre>
				/obs/text?text={encoded}&debug={debug.toString()}&style={textStyle}
			</pre>
			<h4>Personalized URL</h4>
			<a href={`/obs/text?text=${encoded}&debug=${debug.toString()}&style=${textStyle}`} target="_blank" rel="noreferrer">
				Click here for your personalized link!
			</a>

			<hr />
			<h2>Follower Count</h2>
			<div>Useful for displaying your current follower count and, optionally, your follower goal.</div>
			<h3>Options</h3>
			<ul>
				<li>ID (required): Your Twitch user ID</li>
				<li>Goal: Your follower goal. Displayed next to your current follower count</li>
				<li>Style: Text style to apply to the text. See above.</li>
			</ul>
			<h3>Examples</h3>
			<ul>
				<li>
					<a href={`/obs/followers/484182774`} target="_blank" rel="noreferrer">
						Follower count on its own
					</a>
				</li>
				<li>
					<a href={`/obs/followers/484182774?prefix=Followers:`} target="_blank" rel="noreferrer">
						Follower count with a prefix
					</a>
				</li>
				<li>
					<a href={`/obs/followers/484182774?goal=50`} target="_blank" rel="noreferrer">
						Follower count with a goal
					</a>
				</li>
				<li>
					<a href={`/obs/followers/484182774?style=jump`} target="_blank" rel="noreferrer">
						Follower count with a custom style
					</a>
				</li>
			</ul>

			<hr />
			<h2>OBS Demo</h2>
			<video autoPlay loop muted controls>
				<source src="/images/obs-text-demo.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</>
	)
}

export default memo(Help)
