/** @type {import('next').NextConfig} */
const nextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	experimental: {
		appDir: true,
	},
	swcMinify: true,
}

module.exports = nextConfig
