// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sanskritpoint.online',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  // Add other config options here
};

export default nextConfig;