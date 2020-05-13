import assertBox from './assertBox';

export default function getVolume(box) {
	assertBox(box);

	const dimensions = box.min.length;
	let volume = 1;

	for (let i = 0; i < dimensions; i++) {
		volume *= box.max[i] - box.min[i];
	}

	return volume;
};
