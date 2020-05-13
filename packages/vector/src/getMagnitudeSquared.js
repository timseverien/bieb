import assertVector from './assertVector';

export default function getMagnitudeSquared(vector) {
	assertVector(vector);

	let result = 0;

	for (let i = 0; i < vector.length; i++) {
		result += vector[i] * vector[i];
	}

	return result;
}
