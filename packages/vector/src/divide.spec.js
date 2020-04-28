const divide = require('../lib/divide.cjs');

describe('divide', () => {
	test('given two vectors return a vector containing the sum of each component', () => {
		// Arrange
		const a = [2, 4, 6];
		const b = [2, 2, 2];

		// Act
		const result = divide(a, b);

		// Assert
		expect(result).toMatchObject([1, 2, 3]);
	});

	test('given a non-array throws', () => {
		// Arrange
		const a = [1, 2, 3];
		const b = '1, 2, 3';

		// Act + Assert
		expect(() => divide(a, b)).toThrow('is not an Array or TypedArray');
		expect(() => divide(b, a)).toThrow('is not an Array or TypedArray');
		expect(() => divide(b, b)).toThrow('is not an Array or TypedArray');
	});

	test('given vectors with different sizes throws', () => {
		// Arrange
		const a = [1, 2, 3];
		const b = [3, 4];

		// Act + Assert
		expect(() => divide(a, b)).toThrow('have different sizes');
		expect(() => divide(b, a)).toThrow('have different sizes');
	});
});
