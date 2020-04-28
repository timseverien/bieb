const add = require('../lib/add.cjs');

describe('add', () => {
	test('given two vectors returns a vector containing the sum of each component', () => {
		// Arrange
		const a = [1, 2, 3];
		const b = [2, 3, 4];

		// Act
		const result = add(a, b);

		// Assert
		expect(result).toMatchObject([3, 5, 7]);
	});

	test('given a non-array throws', () => {
		// Arrange
		const a = [1, 2, 3];
		const b = '1, 2, 3';

		// Act + Assert
		expect(() => add(a, b)).toThrow('is not an Array or TypedArray');
		expect(() => add(b, a)).toThrow('is not an Array or TypedArray');
		expect(() => add(b, b)).toThrow('is not an Array or TypedArray');
	});

	test('given vectors with different sizes throws', () => {
		// Arrange
		const a = [1, 2, 3];
		const b = [3, 4];

		// Act + Assert
		expect(() => add(a, b)).toThrow('have different sizes');
		expect(() => add(b, a)).toThrow('have different sizes');
	});
});
