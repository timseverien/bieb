import componentWise from './component-wise';
import IComponentWiseOperator from './types/component-wise-operator';
import IVector from './types/vector';

const operatorSubtract: IComponentWiseOperator = (a, b) => a - b;

export default function subtract(
	a: IVector,
	b: IVector,
	OutputType: IVector = a.constructor as IVector,
): IVector {
	return componentWise(a, b, operatorSubtract, OutputType);
}
