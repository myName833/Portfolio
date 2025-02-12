let userConfig = undefined;
try {
  userConfig = require('./v0-user-next.config'); // CommonJS style
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  output: 'export',
  trailingSlash: true,  
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
};

// Merge user config if available
if (userConfig) {
  mergeConfig(nextConfig, userConfig);
}

function mergeConfig(nextConfig, userConfig) {
  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      };
    } else {
      nextConfig[key] = userConfig[key];
    }
  }
}

module.exports = nextConfig; // CommonJS export
