import assertNumber from '@bieb/core/src/assertNumber';

import assertVector from './assertVector';
import assertVectorOperator from './assertVectorOperator';

export default function componentWise(operator) {
	assertVectorOperator(operator);

	return (vector, scalar) => {
		assertVector(vector);
		assertNumber(scalar);

		const result = new Array(vector.length);

		for (let i = 0; i < vector.length; i++) {
			result[i] = operator(vector[i], scalar);
		}

		return result;
	};
}
