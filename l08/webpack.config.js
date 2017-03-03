module.exports = {
  entry: [
    './src-index.js',
  ],
  output: {
    path: `${__dirname}`,
    filename: 'dist-index.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      }
    ]
  },
  devServer: {
    inline: true,
    port: 8008,
  }
}
