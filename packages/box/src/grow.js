import assertVector from '@bieb/vector/src/assertVector';
import assertVectorEqualSize from '@bieb/vector/src/assertVectorEqualSize';

import assertBox from './assertBox';
import create from './create';

export default function grow(box, vector) {
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
