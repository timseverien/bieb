import assertNumber from '@bieb/core/src/assertNumber';

import mix from './mix';

export default function createMap(domainStart, domainEnd, rangeStart, rangeEnd) {
	assertNumber(domainStart);
	assertNumber(domainEnd);
	assertNumber(rangeStart);
	assertNumber(rangeEnd);

	return (value) => {
		assertNumber(value);

		const t = (value - domainStart) / (domainEnd - domainStart);

		return mix(rangeStart, rangeEnd, t);
	};
}
