import IVectorComponentWiseOperator from './types/vectorComponentWiseOperator';

export default function assertVectorOperator(operator: IVectorComponentWiseOperator): boolean {
	if (typeof operator !== 'function') {
		throw new Error(`Operator ${operator} is not a function`);
	}

	return true;
}
