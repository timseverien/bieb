const assertOperator = require('./assert-operator').default;

describe('assertOperator', () => {
	test.each([
		['() => 0'],
		[null],
		[undefined],
	])('given invalid operator throws', (operator) => {
		// Act + Assert
		expect(() => assertOperator(operator)).toThrow('is not a function');
	});

	test('given operator returns true', () => {
		// Arrange
		const operator = () => 0;

		// Act
		const result = assertOperator(operator);

		// Assert
		expect(result).toBe(true);
	});
});
