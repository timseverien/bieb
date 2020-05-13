import assertVector from '@bieb/vector/lib/assertVector.esm';
import assertVectorEqualSize from '@bieb/vector/lib/assertVectorEqualSize.esm';
import IVector from '@bieb/vector/lib/src/types/vector.esm';

import assertBox from './assertBox';
import create from './create';
import IBox from './types/box';

export default function grow(box: IBox, vector: IVector): IBox {
	assertBox(box);
	assertVector(vector);
	assertVectorEqualSize(box.max, vector);

	const result = create(Array.from(box.min), Array.from(box.max));

	for (let i = 0; i < vector.length; i++) {
		result.min[i] = Math.min(result.min[i], vector[i]);
		result.max[i] = Math.max(result.max[i], vector[i]);
	}

	return result;
};
