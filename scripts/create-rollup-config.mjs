/* eslint-disable import/no-extraneous-dependencies */
import glob from 'globby';
import path from 'path';
import slash from 'slash';

import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

const plugins = [
	commonjs(),
	nodeResolve(),
	terser(),
];

export default function createRollupConfig(packageDirectory) {
	const packageName = path.basename(packageDirectory);
	const inputFiles = glob.sync(slash(path.join(packageDirectory, 'src', '*.js')));

	return [{
		input: inputFiles,
		output: [{
			dir: 'lib',
			entryFileNames: '[name].cjs.js',
			exports: 'auto',
			format: 'cjs',
			sourcemap: true,
		}, {
			dir: 'lib',
			entryFileNames: '[name].esm.js',
			format: 'es',
			sourcemap: true,
		}],
		plugins,
	}, {
		input: path.join(packageDirectory, 'src', `${packageName}.js`),
		output: {
			dir: 'lib',
			entryFileNames: '[name].umd.js',
			format: 'umd',
			name: packageName,
			sourcemap: true,
		},
		plugins,
	}];
}
