import assertVector from '../../../shared/assertions/assert-vector';
import IVector from '../../../shared/types/vector';

export default function getMagnitude(vector: IVector): number {
	assertVector(vector);

	return Math.hypot(...vector);
}
