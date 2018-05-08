const path = require('path')
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.jsx'
  },
  output: {
    filename: 'index.js',
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
        use: ['style-loader', 'css-loader', 'sass-loader']
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
    ]
}

//npm install --save-dev extract-text-webpack-plugin@next