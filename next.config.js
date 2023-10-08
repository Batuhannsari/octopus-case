/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['robohash.org'], // Kullandığınız görüntü kaynağının hostname'unu burada tanımlayın
  },

}

module.exports = nextConfig
