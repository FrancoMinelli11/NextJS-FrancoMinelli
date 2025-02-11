/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            {
                hostname : 'i.imgur.com'
            },
            {
                hostname : 'fakestoreapi.com'
            }
        ]
    }
};

export default nextConfig;
