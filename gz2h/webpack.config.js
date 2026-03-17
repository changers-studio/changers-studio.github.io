const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const FileIncludePlugin = require('./build/file-include-plugin');
const SpritePreviewPlugin = require('./build/sprite-preview-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const detectPort = require('detect-port');
const sassEmbedded = require('sass-embedded');

process.env.SASS_SILENCE_DEPRECATIONS = 'legacy-js-api';

const getEntries = () => {
	const entries = {
		main: [
			path.resolve(__dirname, 'src/js/main.js'),
			path.resolve(__dirname, 'src/scss/common.scss'),
		],
		critical: path.resolve(__dirname, 'src/scss/critical.scss'),
	};

	const partialsRoot = path.resolve(__dirname, 'src/partials');

	if (fs.existsSync(partialsRoot)) {
		const collectEntries = (dirPath) => {
			const items = fs.readdirSync(dirPath, { withFileTypes: true });

			items.forEach((item) => {
				const fullPath = path.join(dirPath, item.name);

				if (item.isDirectory()) {
					const jsFile = path.join(fullPath, 'script.js');
					const scssFile = path.join(fullPath, `${item.name}.scss`);

					if (fs.existsSync(jsFile) || fs.existsSync(scssFile)) {
						const relativePath = path
							.relative(partialsRoot, fullPath)
							.replace(/\\/g, '/');
						const entryName = `partials/${relativePath}/script`;

						const files = [];
						if (fs.existsSync(jsFile)) files.push(jsFile);
						if (fs.existsSync(scssFile)) files.push(scssFile);

						if (files.length > 0) {
							entries[entryName] = files;
						}
					}
					collectEntries(fullPath);
				}
			});
		};

		collectEntries(partialsRoot);
	}
	return entries;
};

module.exports = async (_, argv = {}) => {
	const isProd = argv.mode === 'production';
	const isServe = process.env.WEBPACK_SERVE === 'true';
	const defaultPort = Number(process.env.PORT) || 8080;
	const port = isServe ? await detectPort(defaultPort) : defaultPort;

	return {
		target: 'web',
		mode: isProd ? 'production' : 'development',
		entry: getEntries(),
		output: {
			path: path.resolve(__dirname, 'app'),
			filename: (pathData) => {
				return pathData.chunk.name === 'main' || pathData.chunk.name === 'critical'
					? 'js/[name].js'
					: '[name].js';
			},
			clean: true,
		},
		module: {
			rules: [
				{
					test: /\.m?js$/i,
					exclude: /node_modules/,
					use: { loader: 'babel-loader' },
				},
				{
					test: /\.(sa|sc|c)ss$/i,
					use: [
						MiniCssExtractPlugin.loader,
						{ loader: 'css-loader', options: { url: false } },
						{ loader: 'postcss-loader' },
						{
							loader: 'sass-loader',
							options: {
								implementation: sassEmbedded,
								api: 'modern',
							},
						},
					],
				},
			],
		},
		plugins: [
			new RemoveEmptyScriptsPlugin(),
			new SpritePreviewPlugin(),
			new MiniCssExtractPlugin({
				filename: (pathData) => {
					if (pathData.chunk.name.includes('partials/')) {
						return pathData.chunk.name.replace('script', 'style') + '.css';
					}
					return pathData.chunk.name === 'main' ? 'css/main.css' : 'css/critical.css';
				},
			}),
			new CopyWebpackPlugin({
				patterns: [
					{ from: 'src/img', to: 'img', noErrorOnMissing: true },
					{ from: 'src/fonts', to: 'fonts', noErrorOnMissing: true },
					{
						from: 'src/partials/**/*.html',
						to({ absoluteFilename }) {
							const relative = path.relative(
								path.resolve(__dirname, 'src/partials'),
								absoluteFilename,
							);
							return `partials/${relative.replace(/\\/g, '/')}`;
						},
						noErrorOnMissing: true,
					},
				],
			}),
			new FileIncludePlugin({
				source: './src/pages',
				destination: './',
			}),
		],
		optimization: {
			minimize: isProd,
			minimizer: [
				new CssMinimizerPlugin({
					minimizerOptions: {
						preset: ['default', { calc: false }],
					},
				}),
				'...',
			],
		},
		devServer: {
			static: {
				directory: path.resolve(__dirname, 'app'),
				watch: true,
			},
			compress: true,
			host: 'localhost',
			port,
			hot: true,
			liveReload: true,
			client: {
				overlay: true,
			},
			watchFiles: {
				paths: ['src/**/*'],
				options: {
					usePolling: true,
					interval: 100,
				},
			},
			open: {
				target: ['index.html'],
			},
		},
		resolve: {
			extensions: ['.js', '.json'],
		},
		stats: 'errors-warnings',
	};
};
