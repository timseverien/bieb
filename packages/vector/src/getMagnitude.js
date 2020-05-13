import assertVector from './assertVector';

export default function getMagnitude(vector) {
	assertVector(vector);

	return Math.hypot(...vector);
}
