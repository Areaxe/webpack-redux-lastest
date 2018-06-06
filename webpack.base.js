const path = require('path')
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCss = new ExtractTextPlugin('style/index.css');
const extractScss = new ExtractTextPlugin('style/index_scss.css');
var CleanWebpackPlugin = require('clean-webpack-plugin');

// function getEntries(paths) {
//   // node 中同步获取文件列表
//   var files = glob.sync(paths),
//     entries = {};

//   files.forEach(function(filepath) {
//     var toArray = filepath.split('/');
//     var filename = toArray[toArray.length - 2];
//     entries[filename] = filepath;
//   });
//   return entries;
// }


module.exports = {
  mode: 'development',
  entry: {
    index: './src/main.jsx',
    jquery: './src/util/jQuery.js',
    lodash: './src/util/lodash.js',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].[id].js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath: path.resolve(__dirname, 'dist/'),
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist/'),
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
      images : __dirname + '/assets/images',
      style: __dirname + '/src/style',
      assets: __dirname + '/assets'
    }
  },
  module: {
    rules: [
      // {
      //   test: /.*/,
      //   include:path.join(__dirname,'./src'),
      //    use: {
      //     loader: 'bundle-loader',
      //     options: {
      //       name: 'my-chunk',
      //       lazy: true
      //     }
      //   }
      // },
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
    jquery: 'jQuery'
  }],
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
    new CleanWebpackPlugin(['list']),
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