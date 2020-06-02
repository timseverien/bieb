// eslint-disable-next-line import/no-extraneous-dependencies
const fs = require('fs-extra');
const path = require('path');

const DIR_ROOT = path.resolve(__dirname, '..');
const DIR_PACKAGES = path.join(DIR_ROOT, 'packages');
const DIR_DESTINATION = path.join(DIR_ROOT, 'examples', 'scripts', 'packages');

(async () => {
	const contents = await fs.readdir(DIR_PACKAGES);
	const packages = contents.filter((dir) => !dir.startsWith('.'));
	const directories = packages.map((packageName) => ({
		source: path.join(DIR_PACKAGES, packageName, 'lib'),
		destination: path.join(DIR_DESTINATION, packageName),
	}));

	await fs.ensureDir(DIR_DESTINATION);

	for (const { destination, source } of directories) {
		// eslint-disable-next-line no-await-in-loop
		await fs.copy(source, destination);
	}
})();
