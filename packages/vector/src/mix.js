import assertNumber from '@bieb/core/src/assertNumber';
import mixNumber from '@bieb/math/src/mix';

import assertVectorMany from './assertVectorMany';
import componentWise from './componentWise';

export default function mix(a, b, t) {
	assertVectorMany(a, b);
	assertNumber(t);

	const mixComponent = componentWise((start, end) => mixNumber(start, end, t));

	return mixComponent(a, b);
}
