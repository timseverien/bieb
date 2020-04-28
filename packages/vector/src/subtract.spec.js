const subtract = require('../lib/subtract.cjs');

describe('subtract', () => {
	test('given two vectors returns a vector containing the sum of each component', () => {
		// Arrange
		const a = [1, 2, 3];
		const b = [2, 3, 4];

		// Act
		const result = subtract(a, b);

		// Assert
		expect(result).toMatchObject([-1, -1, -1]);
	});

	test('given a non-array throws', () => {
		// Arrange
		const a = [1, 2, 3];
		const b = '1, 2, 3';

		// Act + Assert
		expect(() => subtract(a, b)).toThrow('is not an Array or TypedArray');
		expect(() => subtract(b, a)).toThrow('is not an Array or TypedArray');
		expect(() => subtract(b, b)).toThrow('is not an Array or TypedArray');
	});

	test('given vectors with different sizes throws', () => {
		// Arrange
		const a = [1, 2, 3];
		const b = [3, 4];

		// Act + Assert
		expect(() => subtract(a, b)).toThrow('have different sizes');
		expect(() => subtract(b, a)).toThrow('have different sizes');
	});
});
