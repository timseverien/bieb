const Vector = require('../lib/vector.cjs');

describe('Vector', () => {
	test('add given two vectors should return a vector containing the sum of each component', () => {
		// Arrange
		const a = [1, 2, 3];
		const b = [2, 3, 4];

		// Act
		const result = Vector.add(a, b);

		// Assert
		expect(result).toMatchObject([3, 5, 7]);
	});

	test('add given a non-array should throw', () => {
		// Arrange
		const a = [1, 2, 3];
		const b = '1, 2, 3';

		// Act + Assert
		expect(() => Vector.add(a, b)).toThrow('is not an Array or TypedArray');
		expect(() => Vector.add(b, a)).toThrow('is not an Array or TypedArray');
		expect(() => Vector.add(b, b)).toThrow('is not an Array or TypedArray');
	});

	test('add given vectors with different sizes should throw', () => {
		// Arrange
		const a = [1, 2, 3];
		const b = [3, 4];

		// Act + Assert
		expect(() => Vector.add(a, b)).toThrow('have different sizes');
		expect(() => Vector.add(b, a)).toThrow('have different sizes');
	});
});
