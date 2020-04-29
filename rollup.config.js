import glob from 'globby';
import path from 'path';

import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const files = glob.sync('packages/*/src/*.ts');

const plugins = [
	typescript(),
	commonjs(),
	nodeResolve(),
	terser(),
];

export default files.reduce((output, file) => {
	const packageDirectory = path.join(file, '..', '..');
	const directoryDestination = path.join(packageDirectory, 'lib');

	const packageName = path.basename(packageDirectory);
	const fileName = path.basename(file, path.extname(file));
	const isPackageRoot = fileName === packageName;

	const bundles = [{
		input: file,
		output: [{
			file: path.join(directoryDestination, `${fileName}.esm.js`),
			format: 'es',
		}, {
			file: path.join(directoryDestination, `${fileName}.cjs.js`),
			format: 'cjs',
		}],
		plugins,
	}];

	if (isPackageRoot) {
		bundles.push({
			input: file,
			output: {
				file: path.join(directoryDestination, `${packageName}.umd.js`),
				format: 'umd',
				name: packageName,
			},
			plugins,
		});
	}

	return [
		...output,
		...bundles,
	];
}, []);
