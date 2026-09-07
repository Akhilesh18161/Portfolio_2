/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    output: 'export',
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
