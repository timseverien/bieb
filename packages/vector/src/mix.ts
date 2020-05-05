import assertNumber from '../../../shared/assertions/assertNumber';
import assertVectorMany from '../../../shared/assertions/assertVectorMany';
import IVector from '../../../shared/types/vector';
import componentWise from './componentWise';

function createComponentMixer(t: number): Function {
	// TODO: Implement linear interpolation in math package
	return componentWise((a, b) => a + t * (b - a));
}

export default function mix(a: IVector, b: IVector, t: number): IVector {
	assertVectorMany(a, b);
	assertNumber(t);

	const mixComponent = createComponentMixer(t);

	return mixComponent(a, b);
}
