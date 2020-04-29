import IComponentWiseOperator from '../types/component-wise-operator';

export default function assertVectorOperator(operator: IComponentWiseOperator): boolean {
	if (typeof operator !== 'function') {
		throw new Error(`Operator ${operator} is not a function`);
	}

	return true;
}
