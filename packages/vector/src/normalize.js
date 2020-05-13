import divideScalar from './divideScalar';
import getMagnitude from './getMagnitude';

export default function normalize(v) {
	const magnitude = getMagnitude(v);

	return divideScalar(v, magnitude);
}
