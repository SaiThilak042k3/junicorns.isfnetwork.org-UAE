/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // swcMinify: false,
  webpack: (config, { isServer }) => {
    // Disable SWC completely
    config.module.rules.forEach((rule) => {
      if (rule.oneOf) {
        rule.oneOf.forEach((r) => {
          if (r.use && r.use.loader === 'next-swc-loader') {
            r.use = {
              loader: 'babel-loader',
              options: {
                presets: ['next/babel'],
              },
            };
          }
        });
      }
    });
    return config;
  },
};

module.exports = nextConfig;