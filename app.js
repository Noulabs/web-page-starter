const webpack = require('webpack'),
      config = require('./package.json'),
      express = require('express'),
      // WebpackDevServer = require('webpack-dev-server'),
      path = require('path');

console.log('__dirname- ', __dirname);

const DIST_DIR = path.join(__dirname, "dist"),
      HTML_FILE = path.join(DIST_DIR, "index.html"),
      DEFAULT_PORT = process.env.PORT || 3333,
      app = express(),
      isDevelopment = process.env.NODE_ENV === "dev",
      NAME = "web-page-starter";

console.log('isDevelopment- ', isDevelopment);
// require('./server/some');

app.use(express.static(DIST_DIR));

//Send index.html when the user access the web
app.get("/", function (req, res) {
  res.sendFile(HTML_FILE , { root: __dirname });
});

app.get("/board", function (req, res) {
  res.sendFile(path.join(DIST_DIR, "board.html"));
});

app.listen(DEFAULT_PORT, function () {
  console.log('Example app running on port ' + DEFAULT_PORT);
});

// if (isDevelopment) {
//   // configure webpack-dev-server
//   var config = require('../../webpack.client.config');
//   console.log('config.entry- ', config.entry);
//   var webpackDevServerPort = DEFAULT_PORT + 10;
//   config.entry.board.unshift('webpack-dev-server/client?http://localhost:' + DEFAULT_PORT + '/', 'webpack/hot/only-dev-server');
//
//   new WebpackDevServer(webpack(config), {
//     hot: true,
//     historyApiFallback: true,
//     publicPath: "/",
//     proxy: {
//       '*': 'http://localhost:' + DEFAULT_PORT
//     }
//   }).listen(webpackDevServerPort, 'localhost', function (err, result) {
//     if (err) {
//       console.error(err);
//     }
//     console.info('Listening at localhost (WebpackDevServer):' + webpackDevServerPort);
//   });
// } else{
//   var http = require("http");
//   setInterval(function() {
//       http.get("http://quantxy.herokuapp.com");
//   }, 300000); // every 5 minutes (300000)
// }
