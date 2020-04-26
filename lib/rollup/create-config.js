/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-extraneous-dependencies */

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
	const directoryDestination = path.join(packageDirectory, 'lib');
	const directorySource = path.join(packageDirectory, 'src');

	const packageName = path.basename(packageDirectory);
	const packageFile = path.join(directorySource, `${packageName}.ts`);

	const files = glob.sync([
		`!${packageFile}`,
		path.join(directorySource, '*.ts'),
	]);

	return [
		{
			input: packageFile,
			output: {
				file: path.join(directoryDestination, `${packageName}.umd.js`),
				format: 'umd',
				name: packageName,
			},
			plugins,
		},

		...files.map((input) => {
			const outputFilename = path.basename(input, path.extname(input));

			return {
				input,
				output: [{
					file: path.join(directoryDestination, `${outputFilename}.esm.js`),
					format: 'es',
				}, {
					file: path.join(directoryDestination, `${outputFilename}.cjs.js`),
					format: 'cjs',
				}],
				plugins,
			};
		}),
	];
}
