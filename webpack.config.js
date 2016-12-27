var webpack = require('webpack');

// NOTE: paths are relative to each functions folder

module.exports = {
  entry: ['./src/index.ts'],
  externals: {
    // aws-sdk does not (currently) build correctly with webpack. However,
    // Lambda includes it in its environment, so omit it from the bundle.
    // See: https://github.com/apex/apex/issues/217#issuecomment-194247472
    'aws-sdk': 'aws-sdk'
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: [/node_modules/]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs2',
    path: './lib'
  },
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'node-fetch',
    })
  ],
  target: 'node',
}
