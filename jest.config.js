module.exports = {
	collectCoverage: true,
	collectCoverageFrom: [
		'**/*.ts',
		'!shared/types/*.ts',
	],
	transformIgnorePatterns: [
		'\\.spec\\.js$',
		'\\.test\\.js$',
	],
};
