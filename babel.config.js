// Babel config for Jest
module.exports = {
	ignore: [
		'**/*.spec.js',
		'**/*.test.js',
	],
	presets: [
		['@babel/preset-env', {
			targets: {
				node: 'current',
			},
		}],
		'@babel/preset-typescript',
	],
};
