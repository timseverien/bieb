import assertVector from '@bieb/vector/src/assertVector';
import assertVectorEqualSize from '@bieb/vector/src/assertVectorEqualSize';

import assertBox from './assertBox';

export default function contains(box, vector) {
	assertBox(box);
	assertVector(vector);
	assertVectorEqualSize(box.max, vector);

	for (let i = 0; i < vector.length; i++) {
		if (vector[i] < box.min[i] || vector[i] > box.max[i]) {
			return false;
		}
	}

	return true;
}
