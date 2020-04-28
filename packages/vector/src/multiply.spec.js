const multiply = require('../lib/multiply.cjs');

describe('multiply', () => {
	test('given two vectors returns a vector containing the sum of each component', () => {
		// Arrange
		const a = [1, 2, 3];
		const b = [2, 3, 4];

		// Act
		const result = multiply(a, b);

		// Assert
		expect(result).toMatchObject([2, 6, 12]);
	});

	test('given a non-array throws', () => {
		// Arrange
		const a = [1, 2, 3];
		const b = '1, 2, 3';

		// Act + Assert
		expect(() => multiply(a, b)).toThrow('is not an Array or TypedArray');
		expect(() => multiply(b, a)).toThrow('is not an Array or TypedArray');
		expect(() => multiply(b, b)).toThrow('is not an Array or TypedArray');
	});

	test('given vectors with different sizes throws', () => {
		// Arrange
		const a = [1, 2, 3];
		const b = [3, 4];

		// Act + Assert
		expect(() => multiply(a, b)).toThrow('have different sizes');
		expect(() => multiply(b, a)).toThrow('have different sizes');
	});
});
