import IVector from '@bieb/vector/lib/src/vector';

import assertBox from './assertBox';
import IBox from './types/box';

export default function getSize(box: IBox): IVector {
	assertBox(box);

	const result = new Array(box.min.length);

	for (let i = 0; i < result.length; i++) {
		result[i] = box.max[i] - box.min[i];
	}

	return result;
}
