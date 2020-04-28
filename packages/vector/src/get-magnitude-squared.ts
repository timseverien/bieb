import IVector from './types/vector';
import assertVector from './utilities/assert-vector';

export default function getMagnitudeSquared(vector: IVector): number {
	assertVector(vector);

	let result = 0;

	for (let i = 0; i < vector.length; i++) {
		result += vector[i] * vector[i];
	}

	return result;
}
