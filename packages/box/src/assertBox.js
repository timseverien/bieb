import assertVector from '@bieb/vector/src/assertVector';
import assertVectorEqualSize from '@bieb/vector/src/assertVectorEqualSize';

export default function assertBox(box) {
	if (
		typeof box !== 'object'
		|| box === null
		|| !('max' in box)
		|| !('min' in box)
	) {
		throw new Error(`Box "${box}" should be a box`);
	}

	try {
		assertVector(box.max);
		assertVector(box.min);
		assertVectorEqualSize(box.max, box.min);
	} catch (error) {
		throw new Error(`Box "${box}" should be a box`);
	}

	return true;
}
