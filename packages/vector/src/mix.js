import assertNumber from '@bieb/core/src/assertNumber';

import assertVectorMany from './assertVectorMany';
import componentWise from './componentWise';

function createComponentMixer(t) {
	// TODO: Implement linear interpolation in math package
	return componentWise((a, b) => a + t * (b - a));
}

export default function mix(a, b, t) {
	assertVectorMany(a, b);
	assertNumber(t);

	const mixComponent = createComponentMixer(t);

	return mixComponent(a, b);
}
