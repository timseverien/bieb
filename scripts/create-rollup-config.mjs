import glob from 'globby';
import path from 'path';

import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const plugins = [
	typescript(),
	commonjs(),
	nodeResolve(),
	terser(),
];

export default function createRollupConfig(packageDirectory) {
	const packageName = path.basename(packageDirectory);
	const inputFiles = glob.sync(path.join(packageDirectory, 'src', '*.ts'));

	return [{
		input: inputFiles,
		output: [{
			dir: 'lib',
			entryFileNames: '[name].cjs.js',
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
		input: path.join(packageDirectory, 'src', `${packageName}.ts`),
		output: {
			dir: 'lib',
			format: 'umd',
			name: packageName,
			sourcemap: true,
		},
		plugins,
	}];
};
