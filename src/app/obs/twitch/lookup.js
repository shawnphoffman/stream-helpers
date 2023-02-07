import { memo, useCallback, useMemo, useState } from 'react'
import useSWR from 'swr'

import { NativeControl } from '../help'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const TwitchLookup = () => {
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

	const { data, error, isLoading } = useSWR(search ? `/api/twitch/lookup?username=${search}` : null, fetcher, {})

	const userId = useMemo(() => {
		return data?.data[0]?.id
	}, [data])

	return (
		<div>
			<h1>Twitch ID Lookup</h1>
			<h2>Enter your Twitch username to lookup your user ID</h2>
			<NativeControl type="text" onChange={handleTextChange} />
			<button onClick={handleSubmit}>Submit</button>
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
		</div>
	)
}

export default memo(TwitchLookup)
