var path = require('path');
var webpack = require('webpack');

//http://webpack.github.io/
var config =  {
	entry: {
		index:'./src/index.js',//入口
	},
	output:{
		path:path.join(__dirname,'dist'),//多个页面打包后，js文件存放的路径
		filename:'[name].bundle.js',//打包后js文件名。name作为一个变量，webpack会自动匹配打包js路径
		publicPath:'/dist/'//使dist目录下的文件发生修改时，能时时的被server监听
	},
	plugins:[
		/*
		new webpack.DefinePlugin({//配置环境
			'process.env':{
				NOOE_ENV:'"development"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({////使用UglifyJsPlugin压缩打包后的代码
			compress: {
				warnings: false//不输出错误代码
			}
		}),
		new webpack.optimize.OccurenceOrderPlugin()//优化维护第三库的模块id*/
	],
	module: {
		loaders: [
			//加载css文件，调用css-loader，调用style-loader
			{
				test: /\.css$/,
				loaders: ['style-loader', 'css-loader']
			},
			//处理图片和其他静态文件
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'url-loader?limit=8192'//注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片。
			},
			//编译lsee文件
			{ 
				test: /\.less$/, 
				loader: 'style-loader!css-loader!less-loader' 
			},
			//解析.scss文件,对于用 import 或 require 引入的sass文件进行加载，以及<style lang="sass">...</style>声明的内部样式进行加载
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!scss-loader' //这里用了样式分离出来的插件，如果不想分离出来，可以直接这样写 loader:'style!css!sass'
            },
			//编译es6
			/*{ 
				test: /\.js$/, 
				exclude: /node_modules/, //过滤掉不需要编译的文件夹
				include:/(src|dist)/,
				loader: "babel-loader"
			},*/
			//编译jsx
			{
				test: /\.js$/,
				exclude: /node_modules/, //过滤掉不需要编译的文件夹
				include:/(src|dist)/,
				loader: 'babel-loader'/*,
				query: {
				  presets: ['es2015', 'react','stage-0']
				}*///在.babelrc内配置
			}
		],
		noParse:[/jquery/]//使用了像jquery，react这个的库，用这个可以提高打包性能
	}
};
//获取环境变量
var env = process.env.NODE_ENV;
if (env === 'production') {//生成
	console.log("ok!! production");
	//给配置添加使用的插件
	config.plugins = config.plugins.concat(
		new webpack.optimize.UglifyJsPlugin({// 压缩
			compress: {
				warnings: false////不输出错误代码
			}
		}),
		new webpack.optimize.OccurenceOrderPlugin()//优化维护第三库的模块id
	);
}else if(env =="development"){//开发
	console.log("ok!! development");
}
module.exports = config;