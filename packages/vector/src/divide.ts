import componentWise from './component-wise';
import IComponentWiseOperator from './types/component-wise-operator';
import IVector from './types/vector';

const operatorDivide: IComponentWiseOperator = (a, b) => a / b;

export default function divide(
	a: IVector,
	b: IVector,
	OutputType: IVector = a.constructor as IVector,
): IVector {
	return componentWise(a, b, operatorDivide, OutputType);
}
