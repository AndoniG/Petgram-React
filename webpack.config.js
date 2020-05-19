const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const path = require('path');

module.exports = {
  output: {
    filename: "app.bundle.js",
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/assets/icon.png",
    }),
    new WebpackPwaManifestPlugin({
      name: "Petgram - Your pet photos app.",
      short_name: "Petgram 🐶",
      description: "You can find pet photos easy",
      orientation: "portrait",
      display: "standalone",
      start_url: "/",
      scope: "/",
      background_color: "#fff",
      theme_color: "#b1a",
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('Icons'),
          ios: true
        }
      ]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          //  EN ESTE CASO SE AGREGAN LAS PÁGINAS QUE SE DESEAN GUARDAR EN CACHÉ. EN ESTE CASO EL SITIO DE DONDE SE SACAN LAS IMG
          urlPattern: new RegExp('https://res.cloudinary.com | images.unsplash.com'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          // CACHEAMOS LA API
          urlPattern: new RegExp('https://petgram-server-andoni-jqbden0li.now.sh/'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
