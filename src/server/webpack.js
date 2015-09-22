/**
 * Created by zain on 8/17/15.
 */
import WebpackDevServer from "webpack-dev-server";
import webpack from "webpack";
import config from "../../config/config";
import webpackConfig from "../../webpack.config.dev";

var server = new WebpackDevServer(webpack(webpackConfig), {
  // webpack-dev-server options
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  stats: {colors: true}
});

server.listen(config.webpack.port, "localhost", function () {
});
