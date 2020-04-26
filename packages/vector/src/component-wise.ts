import assertArrayLikeMany from './utilities/assert-array-like-many';
import assertEqualLength from './utilities/assert-equal-length';
import IComponentWiseOperator from './types/component-wise-operator';
import IVector from './types/vector';

export default function componentWise(
	a: IVector,
	b: IVector,
	operator: IComponentWiseOperator,
	OutputType: IVector = a.constructor as IVector,
): IVector {
	assertArrayLikeMany(a, b);
	assertEqualLength(a, b);

	const result = new OutputType(a.length);

	for (let i = 0; i < a.length; i++) {
		result[i] = operator(a[i], b[i]);
	}

	return result;
}
