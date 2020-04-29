import assertVectorEqualSize from '../../../shared/assertions/assert-vector-equal-size';
import assertVectorMany from '../../../shared/assertions/assert-vector-many';
import assertVectorOperator from '../../../shared/assertions/assert-vector-operator';
import IComponentWiseOperator from '../../../shared/types/component-wise-operator';
import IVector from '../../../shared/types/vector';

export default function componentWise(operator: IComponentWiseOperator): Function {
	assertVectorOperator(operator);

	return (a: IVector, b: IVector): IVector => {
		assertVectorMany(a, b);
		assertVectorEqualSize(a, b);

		const result = new Array<number>(a.length);

		for (let i = 0; i < a.length; i++) {
			result[i] = operator(a[i], b[i]);
		}

		return result;
	}
}
