const path = require('path')

const dev = require('./webpack.dev.config')
const prod = require('./webpack.prod.config')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
// 使用dayjs替换moment，减小打包体积
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
const theme = require('../src/theme')
module.exports = (env) => {
	const isDev = env.development
	const baseConfig = {
		devtool: isDev ? 'cheap-module-eval-source-map' : false,
		entry: {
			index: path.resolve(__dirname, '../src/index.tsx'),
		},
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, '../dist'),
		},
		resolve: {
			extensions: ['.js', '.jsx', '.json', '.css', '.ts', '.tsx'],
			alias: {
				'@': path.resolve(__dirname, '../src'),
				comp: path.resolve(__dirname, '../src/components'),
				views: path.resolve(__dirname, '../src/views'),
				utils: path.resolve(__dirname, '../src/utils'),
				mob: path.resolve(__dirname, '../src/mobx'),
				styl: path.resolve(__dirname, '../src/styles'),
			},
		},
		optimization: {
			splitChunks: {
				chunks: 'all',
				name: true,
				cacheGroups: {
					vendors: {
						test: /[\\/]node_modules[\\/]/,
						priority: -10,
					},
					default: {
						minSize: 1, // 不是第三方模块，被引入两次也会被抽离
						minChunks: 2,
						priority: -20,
					},
				},
			},
		},
		module: {
			rules: [
				{
					test: /\.tsx?/,
					use: ['ts-loader'],
					exclude: /node_modules/,
				},
				{
					test: /\.js$/,
					use: 'babel-loader',
					exclude: /node_modules/,
				},
				{
					test: /\.css$/,
					use: [
						isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								importLoaders: 2,
							},
						},
						'postcss-loader',
						'less-loader'
					],
				},
				{
					test: /\.less$/,
					use: [
						'style-loader',
						'css-loader',
						{
							loader: 'less-loader',
							options: {
								lessOptions: {
									modifyVars: theme,
									javascriptEnabled: true,
								},
							},
						},
					],
				},
				{
					test: /\.(jpe?g|png|gif)$/,
					use: {
						loader: 'url-loader',
						options: {
							limit: 20 * 1024,
							name: 'img/[name].ext',
						},
					},
				},
				{
					test: /\.(woff|eot|ttf|otf|svg)$/,
					use: 'file-loader',
				},
			],
		},
		plugins: [
			new AntdDayjsWebpackPlugin(),
			!isDev &&
				new MiniCssExtractPlugin({
					filename: 'css/[name].[contentHash].css',
				}),
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, '../public/index.html'),
				filename: 'index.html',
				hash: true,
				minify: {
					removeAttributeQuotes: true,
					removeComments: true,
				},
			}),
			new DllReferencePlugin({
				manifest: path.resolve(__dirname, '../dll/manifest.json'),
			}),
			new AddAssetHtmlWebpackPlugin({
				filepath: path.resolve(__dirname, '../dll/react.dll.js'),
			}),
		].filter(Boolean),
	}

	return isDev ? merge(baseConfig, dev) : merge(baseConfig, prod)
}
