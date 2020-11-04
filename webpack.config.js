const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './index.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'bundle.js',
      publicPath: '/'
   },
   devServer: {
      historyApiFallback: true,
      inline: true,
      port: 8001
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['@babel/preset-env', '@babel/preset-react']
            }
         },
         {
            test: /\.(sass|scss)$/,
            use: [
               'style-loader',
               'css-loader',
               'sass-loader',
            ]
         },
         {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
         }
      ]
   },
   resolve: {
      extensions: ['*', '.js', '.jsx', '.css']
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './dist/index.html'
      })
   ]
}