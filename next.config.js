/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "m.media-amazon.com",
            },
            {
                protocol: "https",
                hostname: "dummyjson.com",
            },
            {
                protocol: "https",
                hostname: "i.dummyjson.com",
            },
            {
                protocol: "https",
                hostname: "thumbs.dreamstime.com",
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
            },
            {
                protocol: "https",
                hostname: "encrypted-tbn0.gstatic.com",
            },
            {
                protocol: "https",
                hostname: "firebasestorage.googleapis.com"
            },
            {
                protocol: "https",
                hostname: "**",
            },
            //
        ],
        unoptimized: true
    },
}

module.exports = nextConfig
