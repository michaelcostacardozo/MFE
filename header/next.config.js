const NextFederationPlugin = require('@module-federation/nextjs-mf');

const mfes = require('./src/constants/mfes.json');

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  const remotesObject = {};

  for (const mfeId in mfes) {
    const { variable } = mfes[mfeId] || {};

    if (process.env[variable] && process.env.NODE_ENV !== 'production') {
      remotesObject[
        mfeId
      ] = `${mfeId}@${process.env[variable]}/_next/static/${location}/remoteEntry.js`;
    } else {
      remotesObject[
        mfeId
      ] = `${mfeId}@${process.env.MFES_URL}/${mfeId}/_next/static/${location}/remoteEntry.js`;
    }
  }

  return remotesObject;
};
const exposes = {
  './Header': './src/components/Header',
  // './categoryFetchers': './src/components/Header/fetchers/fetcher'
};

module.exports = {
  output: 'standalone',

  basePath: '/header',

  images: {
    domains: [
      'headless-cms-bucket.s3.amazonaws.com',
      'hpxn64u7uf.execute-api.us-east-1.amazonaws.com',
    ],
    minimumCacheTTL: 60,
  },

  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'header',
        filename: 'static/chunks/remoteEntry.js',
        exposes,
        remotes: remotes(options.isServer),
        shared: {},
        extraOptions: {
          automaticAsyncBoundary: false,
        },
      })
    );

    return config;
  },
};
