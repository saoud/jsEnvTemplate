const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const Dotenv = require('dotenv-webpack');


module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map', 
  devServer: {                 
    contentBase: './dist'  
  },    
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv(),
    new HtmlWebpackPlugin({
<<<<<<< HEAD
      title: 'Martian News Service',
=======
      title: 'Galactic Age Calculator',
>>>>>>> parent of 1abb030 (fixing template with correct package.json and webpack.config.js)
      template: './src/index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
<<<<<<< HEAD
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "eslint-loader"
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/'
            }
          }
        ]
      },
      {
        test:/\.html$/,
        use: [
          'html-loader'
        ]
      },
=======
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
>>>>>>> parent of 1abb030 (fixing template with correct package.json and webpack.config.js)
    ]
  }
};
