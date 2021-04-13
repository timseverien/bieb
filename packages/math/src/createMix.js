import assertNumber from '@bieb/core/src/assertNumber';

export default function createMix(start, end) {
	assertNumber(start);
	assertNumber(end);

	return (t) => {
		assertNumber(t);

		return (1 - t) * start + t * end;
	};
}
