import assertVector from '@bieb/vector/lib/assertVector.esm';
import assertVectorEqualSize from '@bieb/vector/lib/assertVectorEqualSize.esm';

import IBox from './types/box';

export default function assertBox(box: IBox): boolean {
	if (
		typeof box !== 'object'
		|| box === null
		|| !('max' in box)
		|| !('min' in box)
	) {
		throw new Error(`Box "${box}" should be an IBox`);
	}

	try {
		assertVector(box.max);
		assertVector(box.min);
		assertVectorEqualSize(box.max, box.min);
	} catch {
		throw new Error(`Box "${box}" should be an IBox`);
	}

	return true;
}
