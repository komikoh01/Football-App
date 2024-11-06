/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'www.thesportsdb.com',
            port: '',
            pathname: '/images/media/team/badge/**',    
        },
    ],
    }
};

export default nextConfig;

