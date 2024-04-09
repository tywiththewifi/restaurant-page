const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    watchFiles: ['src/index.html'],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
  },
  plugins: [
    new htmlWebPackPlugin({
        title: 'development',
        template: './src/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from: 'src/menu.html', to: ''},
        {from: 'src/about.html', to: ''},
      ],
    }),
  ],
  module: {
    rules: [ 
        {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
    },

    {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    },
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
    },
    {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
    },
],

},
};