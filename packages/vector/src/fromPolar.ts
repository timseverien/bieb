import { assertNumber } from '@bieb/core';

import IVector from './types/vector';

export default function fromPolar(angle: number, radius = 1): IVector {
	assertNumber(angle);
	assertNumber(radius);

	return [
		radius * Math.cos(angle),
		radius * Math.sin(angle),
	];
};
