/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        THEME: process.env.THEME || "light",
    }
};

export default nextConfig;
