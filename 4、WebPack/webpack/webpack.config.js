const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin")
module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    // publicPath: "dist/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 从右往左读， 先加载css 然后再是style      css将css模块引入main  style解析
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader", options: {
                sourceMap: true
            }
        }, {
            loader: "less-loader", options: {
                sourceMap: true
            }
        }]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
    resolve: {
    extensions: ['.js', '.vue', '.css'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html'
      }),
      new UglifyjsWebpackPlugin()
    ],
    devServer: {
      contentBase: './dist',
      inline: true
    }
}