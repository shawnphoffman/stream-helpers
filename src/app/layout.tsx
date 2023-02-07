import 'src/styles/globals.css'
import 'src/styles/obs.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head />
			<body>{children}</body>
		</html>
	)
}
