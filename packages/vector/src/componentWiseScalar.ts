import assertNumber from '@bieb/core/lib/assertNumber.esm';

import assertVector from './assertVector';
import assertVectorOperator from './assertVectorOperator';
import IVectorComponentWiseOperator from './types/vectorComponentWiseOperator';
import IVector from './types/vector';

export default function componentWise(operator: IVectorComponentWiseOperator): Function {
	assertVectorOperator(operator);

	return (vector: IVector, scalar: number): IVector => {
		assertVector(vector);
		assertNumber(scalar);

		const result = new Array<number>(vector.length);

		for (let i = 0; i < vector.length; i++) {
			result[i] = operator(vector[i], scalar);
		}

		return result;
	}
}
