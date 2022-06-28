const path = require('path');

module.exports = {
    reactStrictMode: true,
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        })
        return config
      },
      sassOptions: {
        includesPaths: [path.join(__dirname, 'styles')],
      },
    images: {
      loader: 'akamai',
      path: '/'
    }
}