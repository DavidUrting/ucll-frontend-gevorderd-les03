// webpack.config.js 
module.exports = { 
  entry: { main: './src/index.js' },
  output: {
    filename: '../wwwroot/webpack-output.js'
  },
  module: {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }
    ]
  }
};
