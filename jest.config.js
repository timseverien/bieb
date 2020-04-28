module.exports = {
	collectCoverage: true,
	collectCoverageFrom: [
		'packages/**/*.ts',
		'!packages/**/types/*.ts',
	],
	transformIgnorePatterns: [
		'\\.spec\\.js$',
		'\\.test\\.js$',
	],
};
