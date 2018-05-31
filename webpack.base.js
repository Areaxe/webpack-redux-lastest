const path = require('path')
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCss = new ExtractTextPlugin('style/index.css');
const extractScss = new ExtractTextPlugin('style/index_scss.css');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/main.jsx'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000,
    hot: true,
  },
  
  resolve: {
    alias : { 
      node_modules : __dirname + '/node_modules', 
      util : __dirname + '/src/util', 
      container : __dirname + '/src/containers', 
      components : __dirname + '/src/components', 
      actions : __dirname + '/src/actions',
      reducer: __dirname + '/src/reducer', 
      image : __dirname + '/assets/image',
      style: __dirname + '/style'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      },
      {
        test:/\.scss$/,
        use: extractScss.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test:/\.css$/,
        use: extractCss.extract(['css-loader'])
      },
      // {
      //   test:/\.(jpg|png|gif|svg)$/,
      //   use:'url-loader',
      //   include:path.join(__dirname,'./src'),
      //   exclude:/node_modules/
      // }
    ]
  },
   node: {
        fs: 'empty'
    },
  plugins: [
    new TransferWebpackPlugin([
      {
        from: 'www'
      }
    ], path.resolve(__dirname,'src')),
    new webpack.HotModuleReplacementPlugin(),
    extractCss,
    extractScss,
    ],
    optimization :{
      splitChunks:{
        name: 'common'
      }
    }

}

//npm install --save-dev extract-text-webpack-plugin@next