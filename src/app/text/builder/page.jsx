'use client'

import { memo, useCallback, useEffect, useState } from 'react'
import Link from 'next/link'

import ObsText from '@/components/text/ObsText'
import { TextStyle } from '@/components/text/TextStyle'
// import styles from './page.module.css'

/*
██████╗ ██╗   ██╗██╗██╗     ██████╗ ███████╗██████╗
██╔══██╗██║   ██║██║██║     ██╔══██╗██╔════╝██╔══██╗
██████╔╝██║   ██║██║██║     ██║  ██║█████╗  ██████╔╝
██╔══██╗██║   ██║██║██║     ██║  ██║██╔══╝  ██╔══██╗
██████╔╝╚██████╔╝██║███████╗██████╔╝███████╗██║  ██║
╚═════╝  ╚═════╝ ╚═╝╚══════╝╚═════╝ ╚══════╝╚═╝  ╚═╝
*/

const Builder = () => {
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
			<div id="title">OBS Text Builder</div>
			{/*  */}
			<h2>Text to Display:</h2>
			<input type="text" onChange={handleTextChange} value={originalText} />
			{/*  */}
			<h2>Text Style:</h2>
			<select onChange={handleStyleChange} defaultValue={textStyle}>
				<option>{TextStyle.GRADIENT}</option>
				<option>{TextStyle.JUMP}</option>
				<option>{TextStyle.WAVE}</option>
				<option>{TextStyle.NONE}</option>
			</select>
			{/*  */}
			<h2>Visibility:</h2>
			<div className="note">
				Note: This controls whether the text animates in and out. More customization options will be coming to this soon.
			</div>
			<div>
				<input type="checkbox" name="debug" onChange={handleDebugChange} checked={debug} />
				<label>Always visible?</label>
			</div>
			{/*  */}
			<h2>Preview</h2>
			<ObsText textStyle={textStyle} debug={debug}>
				{originalText || ''}
			</ObsText>
			{/*  */}
			<h2>Personalized Link</h2>
			<a href={`/render/text?text=${encoded}&debug=${debug.toString()}&style=${textStyle}`} target="_blank" rel="noreferrer">
				Click here for your personalized link!
			</a>
			{/*  */}
			<h2>Link Preview</h2>
			<small>
				<pre>
					/render/text?text={encoded}&debug={debug.toString()}&style={textStyle}
				</pre>
			</small>
		</>
	)
}

export default memo(Builder)
