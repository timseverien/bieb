import assertBox from './assertBox';

export default function getSize(box) {
	assertBox(box);

	const result = new Array(box.min.length);

	for (let i = 0; i < result.length; i++) {
		result[i] = box.max[i] - box.min[i];
	}

	return result;
}
