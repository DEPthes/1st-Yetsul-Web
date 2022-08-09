const webpack = require("webpack");

module.exports = {
	// eslint-disable-next-line no-unused-vars
	webpack: (config, env) => {
		config.plugins.push(
			new webpack.ProvidePlugin({
				$: "jquery",
				jQuery: "jquery",
				IScroll: "iscroll",
			})
		);
		return config;
	},
};
