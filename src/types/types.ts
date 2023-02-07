export type KeyValueType = { [key: string]: string }

export type PageProps = {
	params: {
		slug: string
	}
	searchParams: {
		[key: string]: string | undefined
	}
}
