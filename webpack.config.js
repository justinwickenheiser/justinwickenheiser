var path = require("path");

var DIST_DIR = path.resolve(__dirname, "./");

var config = {
	entry: {
		'files/dist/header': './files/react/renders/header.js',
		'files/dist/footer': './files/react/renders/footer.js',
		'files/dist/card': './files/react/renders/card.js',
		'files/dist/callToAction': './files/react/renders/callToAction.js',
		'files/dist/footerWidgets': './files/react/renders/footerWidgets.js'
	},
	output: {
		path: DIST_DIR,
		filename: "[name].bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js?/,
				include: [
					path.resolve(__dirname, "./files/react")
				],
				loader: "babel-loader",
				query: {
					presets: ["react","es2015","stage-2"]
				}
			}
		]
	}
};

module.exports = config;