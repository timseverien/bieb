import assertVector from '@bieb/vector/src/assertVector';
import assertVectorEqualSize from '@bieb/vector/src/assertVectorEqualSize';

export default function create(min, max) {
	assertVector(max);
	assertVector(min);
	assertVectorEqualSize(max, min);

	return { max, min };
}
