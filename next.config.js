/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'three': require.resolve('three')
    };
    // Increase memory limit for the build process
    config.performance = {
      ...config.performance,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    };
    return config;
  },
  experimental: {
    serverComponentsExternalPackages: ['three'],
    forceSwcTransforms: true,
  },
  compiler: {
    removeConsole: false,
  },
};

module.exports = nextConfig; 