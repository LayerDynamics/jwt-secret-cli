// eslint.config.js

module.exports = [
	{
		files: ['**/*.js'],
		languageOptions: {
			ecmaVersion: 2021,
			sourceType: 'commonjs',
		},
		languageOptions: {
			ecmaVersion: 2021,
			sourceType: 'commonjs',
			globals: {
				node: true,
				es2021: true,
				jest: true,
			},
		},
		rules: {
			semi: ['error', 'always'],
			quotes: ['error', 'single'],
			'no-unused-vars': 'error',
			'no-undef': 'error',
			'no-console': 'warn',
		},
	},
];
