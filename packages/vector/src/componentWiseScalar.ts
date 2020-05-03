import assertNumber from '../../../shared/assertions/assertNumber';
import assertVector from '../../../shared/assertions/assertVector';
import assertVectorOperator from '../../../shared/assertions/assertVectorOperator';
import IComponentWiseOperator from '../../../shared/types/componentWiseOperator';
import IVector from '../../../shared/types/vector';

export default function componentWise(operator: IComponentWiseOperator): Function {
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
