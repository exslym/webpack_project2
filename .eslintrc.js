module.exports = {
	root: true,
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jquery: true,
		node: true,
	},
	extends: ['eslint:recommended', 'prettier'],
	parserOptions: {
		parser: '@babel/eslint-parser',
		sourceType: 'module',
		ecmaVersion: 'latest',
		// ecmaVersion: 6,
		// ecmaFeatures: {
		// 	jsx: true,
		// 	experimentalObjectRestSpread: true,
		// 	arrowFunctions: true,
		// 	blockBindings: true,
		// 	classes: true,
		// 	defaultParams: true,
		// 	modules: true,
		// },

		requireConfigFile: false,
		babelOptions: {
			babelrc: false,
			configFile: false,
			presets: ['@babel/preset-env'],
		},
	},

	plugins: ['import', 'prettier'],
	rules: {
		'no-unused-vars': ['warn', { caughtErrorsIgnorePattern: '^ignore' }],
		'linebreak-style': [
			'error',
			process.platform === 'win32' ? 'windows' : 'unix',
		],
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				jsxSingleQuote: true,
				arrowParens: 'avoid',
				'max-len': ['error', 180, 2],
				tabWidth: 2,
				useTabs: true,
				endOfLine: 'auto',
			},
		],
	},
};
