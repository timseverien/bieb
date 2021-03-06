const { assertNumber } = require('./core');

describe('assertNumber', () => {
	test('given number returns true', () => {
		// Arrange
		const number = 4;

		// Act
		const result = assertNumber(number);

		// Assert
		expect(result).toBe(true);
	});

	test.each([
		['4'],
		[[4]],
		[{}],
		[null],
		[undefined],
	])('given invalid number throws', (number) => {
		// Act + Assert
		expect(() => assertNumber(number)).toThrow('should be a number');
	});
});
