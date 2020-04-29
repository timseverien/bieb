const assertVectorOperator = require('./assertVectorOperator').default;

describe('assertVectorOperator', () => {
	test.each([
		['() => 0'],
		[null],
		[undefined],
	])('given invalid operator throws', (operator) => {
		// Act + Assert
		expect(() => assertVectorOperator(operator)).toThrow('is not a function');
	});

	test('given operator returns true', () => {
		// Arrange
		const operator = () => 0;

		// Act
		const result = assertVectorOperator(operator);

		// Assert
		expect(result).toBe(true);
	});
});
