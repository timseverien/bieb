import assertVectorEqualSize from './assertVectorEqualSize';
import assertVectorMany from './assertVectorMany';
import assertVectorOperator from './assertVectorOperator';

export default function componentWise(operator) {
	assertVectorOperator(operator);

	return (a, b) => {
		assertVectorMany(a, b);
		assertVectorEqualSize(a, b);

		const result = new Array(a.length);

		for (let i = 0; i < a.length; i++) {
			result[i] = operator(a[i], b[i]);
		}

		return result;
	};
}
