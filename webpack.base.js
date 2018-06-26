const path = require('path')
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCss = new ExtractTextPlugin('index.css');
const extractScss = new ExtractTextPlugin('index.css');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/main.jsx',
    jquery: './src/util/jQuery.js',
    lodash: './src/util/lodash.js',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath:'/',
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist/'),
    publicPath:'/',
    port: 3000,
    inline: true,
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
      images : __dirname + '/assets/images',
      style: __dirname + '/src/style',
      assets: __dirname + '/assets'
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
        use: extractCss.extract(["style-loader",'css-loader'])
      },
      
      {
        test:/\.(jpg|png|gif|svg)$/,
        use:'url-loader',
        include:path.join(__dirname,'./assets'),
        exclude:/node_modules/
      },
      {
        test:/\.(woff|woff2|eot|ttf|otf|mp3)$/,
        use:'url-loader?limit=8192&name=[path][name].[ext]',
        include:path.join(__dirname,'assets'),
        exclude:/node_modules/
      }
    ]
  },
  externals:[{
    jQuery: 'jQuery'
  }],
  plugins: [
    new TransferWebpackPlugin([
      {
        from: 'www'
      }
    ], path.resolve(__dirname,'src')),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist/*.chunk.js','index.js'],{dry:false}),
    new ExtractTextPlugin("index.css"),
  ],
  optimization :{
    splitChunks:{
      name: 'common'
    }
  }
}

//npm install --save-dev extract-text-webpack-plugin@next