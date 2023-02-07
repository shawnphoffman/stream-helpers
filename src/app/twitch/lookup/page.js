'use client'

import { memo, useCallback, useMemo, useState } from 'react'
import useSWR from 'swr'

/*
██╗      ██████╗  ██████╗ ██╗  ██╗██╗   ██╗██████╗
██║     ██╔═══██╗██╔═══██╗██║ ██╔╝██║   ██║██╔══██╗
██║     ██║   ██║██║   ██║█████╔╝ ██║   ██║██████╔╝
██║     ██║   ██║██║   ██║██╔═██╗ ██║   ██║██╔═══╝
███████╗╚██████╔╝╚██████╔╝██║  ██╗╚██████╔╝██║
╚══════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝
*/
const fetchUrl = 'https://api.shawn.party/api/twitch/lookup'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Lookup = () => {
	const [username, setUsername] = useState('')
	const [search, setSearch] = useState('')

	const handleTextChange = useCallback(e => {
		const value = e.target.value
		setUsername(value)
	}, [])

	const handleSubmit = useCallback(
		e => {
			e.preventDefault()
			setSearch(username)
		},
		[username]
	)

	const url = `${fetchUrl}?username=${search}`
	const { data, error, isLoading } = useSWR(search ? url : null, fetcher, {})

	const userId = useMemo(() => {
		return data?.data[0]?.id
	}, [data])

	return (
		<>
			<div id="title">Twitch ID Lookup</div>
			{/*  */}
			<h2>Enter your Twitch username to lookup your user ID</h2>
			<input type="text" onChange={handleTextChange} />
			{/*  */}
			<a className="button" onClick={handleSubmit}>
				Submit
			</a>
			{userId && (
				<>
					<h2>User ID</h2>
					<div>{userId}</div>
				</>
			)}
			<h4>Data:</h4>
			<pre>{JSON.stringify(data, null, 2)}</pre>
			<h4>Error:</h4>
			<pre>{JSON.stringify(error, null, 2)}</pre>
			<h4>Loading: {isLoading.toString()}</h4>
		</>
	)
}

export default memo(Lookup)
