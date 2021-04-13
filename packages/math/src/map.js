import createMap from './createMap';

export default function map(domainStart, domainEnd, rangeStart, rangeEnd, value) {
	return createMap(domainStart, domainEnd, rangeStart, rangeEnd)(value);
}
