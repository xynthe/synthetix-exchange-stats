module.exports = {
	env: {
		commonjs: true,
		es6: true,
		node: true,
	},
	extends: ['eslint:recommended', 'prettier'],
	plugins: ['import'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2018,
	},
	rules: {
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
		'no-undef': 2,
		'prefer-const': 2,
		semi: ['error', 'always'],
	},
};
