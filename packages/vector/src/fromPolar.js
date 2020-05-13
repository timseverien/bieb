import assertNumber from '@bieb/core/src/assertNumber';

export default function fromPolar(angle, radius = 1) {
	assertNumber(angle);
	assertNumber(radius);

	return [
		radius * Math.cos(angle),
		radius * Math.sin(angle),
	];
}
