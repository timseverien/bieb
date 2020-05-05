import IVector from '../../../shared/types/vector';
import assertVector from '../../../shared/assertions/assertVector';

export default function negate(v: IVector): IVector {
	assertVector(v);

	return [...v].map((n) => -n);
};
