import assertVectorEqualSize from './assertVectorEqualSize';
import assertVectorMany from './assertVectorMany';
import assertVectorOperator from './assertVectorOperator';
import IVectorComponentWiseOperator from './types/vectorComponentWiseOperator';
import IVector from './types/vector';

export default function componentWise(operator: IVectorComponentWiseOperator): Function {
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
