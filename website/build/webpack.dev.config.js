const path = require('path')

module.exports = {
	mode: 'development',
	optimization: {
		usedExports: true,
	},
	devServer: {
		contentBase: path.resolve(__dirname, '../dist'),
		compress: true,
		hot: true,
		port: 4000,
	},
}
