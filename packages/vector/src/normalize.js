import assertVector from './assertVector';
import divideScalar from './divideScalar';
import getMagnitude from './getMagnitude';

export default function normalize(v) {
	assertVector(v);

	if (v.every((c) => c === 0)) {
		return new Array(v.length).fill(0);
	}

	const magnitude = getMagnitude(v);

	return divideScalar(v, magnitude);
}
