import assertVector from '@bieb/vector/lib/assertVector.esm';
import assertVectorEqualSize from '@bieb/vector/lib/assertVectorEqualSize.esm';
import IVector from '@bieb/vector/lib/src/types/vector';

import IBox from './types/box';

export default function create(
	min: IVector,
	max: IVector,
): IBox {
	assertVector(max);
	assertVector(min);
	assertVectorEqualSize(max, min);

	return { max, min };
}
