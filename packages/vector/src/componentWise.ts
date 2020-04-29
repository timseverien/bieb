import assertVectorEqualSize from '../../../shared/assertions/assertVectorEqualSize';
import assertVectorMany from '../../../shared/assertions/assertVectorMany';
import assertVectorOperator from '../../../shared/assertions/assertVectorOperator';
import IComponentWiseOperator from '../../../shared/types/componentWiseOperator';
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
