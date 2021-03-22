const commonRules = {
	'import/extensions': 0,
	'import/no-unresolved': 0,
	indent: [
		'error',
		'tab',
	],
	'linebreak-style': ['error', 'unix'],
	'no-plusplus': 0,
	'no-tabs': 0,

	'no-restricted-syntax': [
		'error',
		{
			selector: 'LabeledStatement',
			message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
		},
		{
			selector: 'WithStatement',
			message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
		},
	],
};

module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'eslint-config-airbnb',
	],
	rules: commonRules,

	overrides: [
		// Jest tests
		{
			files: ['*.spec.js'],
			env: {
				jest: true,
			},
		},
	],
};
