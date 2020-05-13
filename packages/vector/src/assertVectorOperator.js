export default function assertVectorOperator(operator) {
	if (typeof operator !== 'function') {
		throw new Error(`Operator ${operator} is not a function`);
	}

	return true;
}
