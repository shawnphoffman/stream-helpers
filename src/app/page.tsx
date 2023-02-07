import { memo } from 'react'
import Link from 'next/link'

// import styles from './page.module.css'
import ObsText from '@/components/text/ObsText'
import { TextStyle } from '@/components/text/TextStyle'

/*
██╗  ██╗ ██████╗ ███╗   ███╗███████╗
██║  ██║██╔═══██╗████╗ ████║██╔════╝
███████║██║   ██║██╔████╔██║█████╗
██╔══██║██║   ██║██║╚██╔╝██║██╔══╝
██║  ██║╚██████╔╝██║ ╚═╝ ██║███████╗
╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝
*/

const Home = () => {
	return (
		<>
			<div id="title">Stream Helpers</div>
			<div>A collection of free-to-use stream addons.</div>
			<h1>OBS Text Source</h1>
			<div>Useful for displaying basic animated text (e.g. &quot;Please follow&quot;)</div>
			<div className="examples-container">
				<h3>Examples</h3>
				<div className="examples">
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
				</div>
			</div>
			<div className="options-container">
				<h3>Options</h3>
				<ul className="options">
					<li>Text: The text to display</li>
					<li>Style: The style of text animation. See below</li>
					<li>Debug: Enabling this will prevent the text from fading in and out</li>
				</ul>
			</div>
			<h2>Twitch Follower Goal</h2>
			<div>Useful for displaying your current follower count and, optionally, your follower goal.</div>
			<div className="options-container">
				<h3>Options</h3>
				<ul className="options">
					<li>ID (required): Your Twitch user ID</li>
					<li>Goal: Your follower goal. Displayed next to your current follower count</li>
					<li>Style: Text style to apply to the text. See above.</li>
				</ul>
			</div>
			<div className="examples-container">
				<h3>Example (Fake Data)</h3>
				<div className="examples">
					<ObsText textStyle={TextStyle.JUMP} debug>
						Follower Goal: 12/15
					</ObsText>
				</div>
			</div>
			<h2>Live Examples</h2>
			<div className="links-container">
				<h3>Basic &quot;Hello&quot; Text Examples</h3>
				<ul>
					<li>
						<Link href="/render/text?text=hello&style=jump&debug=true" target="_blank" rel="noreferrer">
							JUMP style
						</Link>
					</li>
					<li>
						<Link href="/render/text?text=hello&style=wave&debug=true" target="_blank" rel="noreferrer">
							WAVE style
						</Link>
					</li>
					<li>
						<Link href="/render/text?text=hello&style=gradient&debug=true" target="_blank" rel="noreferrer">
							GRADIENT style
						</Link>
					</li>
					<li>
						<Link href="/render/text?text=hello&style=none&debug=true" target="_blank" rel="noreferrer">
							NONE style
						</Link>
					</li>
				</ul>

				<h3>Twitch Follower Examples</h3>
				<ul>
					<li>
						<a href={`/render/followers/484182774`} target="_blank" rel="noreferrer">
							Follower count on its own
						</a>
					</li>
					<li>
						<a href={`/render/followers/484182774?prefix=Followers:`} target="_blank" rel="noreferrer">
							Follower count with a prefix
						</a>
					</li>
					<li>
						<a href={`/render/followers/484182774?goal=50`} target="_blank" rel="noreferrer">
							Follower count with a goal
						</a>
					</li>
					<li>
						<a href={`/render/followers/484182774?style=jump`} target="_blank" rel="noreferrer">
							Follower count with a custom style
						</a>
					</li>
				</ul>
			</div>
			<h2>Link Builder</h2>
			<Link href="/text/builder">Click here to generate your own</Link>
			<h2>OBS Setup</h2>
			<div>Derp wow wow wow wow wow wow </div>
			<h1>Twitch Tools</h1>
			<h3>User ID Lookup</h3>
			<Link href="/twitch/lookup">/twitch/lookup</Link>
			<h1>Tentative Roadmap</h1>- Storybook support
			{/* https://vercel.com/guides/storybook-with-vercel */}
			{/* https://github.com/vercel/next.js/tree/canary/examples/with-storybook */}- Variable color options - Variable in/out visibility
			options - Variable sizing options
		</>
	)
}

export default memo(Home)
