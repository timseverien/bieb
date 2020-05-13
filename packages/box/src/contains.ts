import assertVector from '@bieb/vector/lib/assertVector.esm';
import assertVectorEqualSize from '@bieb/vector/lib/assertVectorEqualSize.esm';
import IVector from '@bieb/vector/lib/src/types/vector.esm';

import assertBox from './assertBox';
import IBox from './types/box';

export default function contains(box: IBox, vector: IVector): boolean {
	assertBox(box);
	assertVector(vector);
	assertVectorEqualSize(box.max, vector);

	for (let i = 0; i < vector.length; i++) {
		if (vector[i] < box.min[i] || vector[i] > box.max[i]) {
			return false;
		}
	}

	return true;
};
