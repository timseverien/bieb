import assertVector from './assertVector';
import IVector from './types/vector';

export default function getMagnitude(vector: IVector): number {
	assertVector(vector);

	return Math.hypot(...vector);
}
