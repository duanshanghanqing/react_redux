var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var server = new WebpackDevServer(webpack(config), {
	hot:true,
	historyApiFallback:true,
	stats: { colors: true },
	publicPath: '/dist/',
	inline:true,
	progress: true
})
//将其他路由，全部返回index.html
server.app.get('*', function(req, res) {
	res.sendFile(__dirname + '/index.html')
});
server.listen(9999, function(err, result) {
	if (err) {
    console.log(err);
  }
	console.log('正常打开9999端口')
});