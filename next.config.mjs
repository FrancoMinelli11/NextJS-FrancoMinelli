/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            {
                hostname : 'i.imgur.com'
            },
            {
                hostname : 'fakestoreapi.com'
            },
            {
                hostname : 'encrypted-tbn0.gstatic.com'
            }
        ]
    }
};

export default nextConfig;
