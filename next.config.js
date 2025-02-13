let userConfig = undefined;
try {
  userConfig = require("./v0-user-next.config"); // CommonJS style
} catch (e) {
  // Ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  
  
};

// Function to merge user config if available
function mergeConfig(nextConfig, userConfig) {
  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === "object" &&
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

// Merge user config
if (userConfig) {
  mergeConfig(nextConfig, userConfig);
}

module.exports = nextConfig; // CommonJS export
