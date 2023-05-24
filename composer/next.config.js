const NextFederationPlugin = require('@module-federation/nextjs-mf');

const { i18n } = require('./next-i18next.config');
const mfes = require('./src/constants/mfes.json');

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  const remotesObject = {};

  for (const mfeId in mfes) {
    const { variable } = mfes[mfeId] || {};

    if (process.env[variable] && process.env.NODE_ENV !== 'production') {
      console.log(`${mfeId}@${process.env[variable]}/_next/static/${location}/remoteEntry.js`)
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

const exposes = {};

module.exports = {
  output: 'standalone',

  i18n,

  experimental: {
    isrMemoryCacheSize: 0,
  },

  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'composer',
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
