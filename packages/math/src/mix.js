import createMix from './createMix';

export default function mix(start, end, t) {
	return createMix(start, end)(t);
}
