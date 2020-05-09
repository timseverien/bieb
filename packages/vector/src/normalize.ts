import divideScalar from './divideScalar';
import getMagnitude from './getMagnitude';
import IVector from './types/vector';

export default function normalize(v: IVector): IVector {
	const magnitude = getMagnitude(v);

	return divideScalar(v, magnitude);
}
