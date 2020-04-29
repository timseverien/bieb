import assertNumber from '../../../shared/assertions/assertNumber';
import IVector from '../../../shared/types/vector';

export default function fromPolar(angle: number, radius = 1): IVector {
	assertNumber(angle);
	assertNumber(radius);

	return [
		radius * Math.cos(angle),
		radius * Math.sin(angle),
	];
};
