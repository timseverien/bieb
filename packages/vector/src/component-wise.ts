import assertVectorMany from './utilities/assert-vector-many';
import assertEqualSize from './utilities/assert-equal-size';
import assertOperator from './utilities/assert-operator';
import IComponentWiseOperator from './types/component-wise-operator';
import IVector from './types/vector';

export default function componentWise(operator: IComponentWiseOperator): Function {
	assertOperator(operator);

	return (a: IVector, b: IVector): IVector => {
		assertVectorMany(a, b);
		assertEqualSize(a, b);

		const result = new Array<number>(a.length);

		for (let i = 0; i < a.length; i++) {
			result[i] = operator(a[i], b[i]);
		}

		return result;
	}
}
