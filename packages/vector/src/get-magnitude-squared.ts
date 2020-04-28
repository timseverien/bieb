import IVector from './types/vector';
import assertArrayLike from './utilities/assert-array-like';

export default function getMagnitudeSquared(vector: IVector): number {
	assertArrayLike(vector);

	let result = 0;

	for (let i = 0; i < vector.length; i++) {
		result += vector[i] * vector[i];
	}

	return result;
}
