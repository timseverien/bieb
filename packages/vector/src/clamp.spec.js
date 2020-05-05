const { clamp } = require('./vector');

describe('clamp', () => {
	test('given a vector, min, and max returns a clamped vector', () => {
		// Arrange
		const v = [9, -3, 2];
		const min = [0, 0, 0];
		const max = [3, 3, 3];

		// Act
		const result = clamp(v, min, max);

		// Assert
		expect(result).toMatchObject([3, 0, 2]);
	});

	test.each([
		['[1, 2, 3]'],
		[{}],
		[null],
		[undefined],
	])('given a non-vector throws', (v) => {
		// Arrange
		const min = [1, 2, 3];
		const max = [1, 2, 3];
		// Act + Assert
		expect(() => clamp(v, min, max)).toThrow('should be an Array or TypedArray');
	});

	test.each([
		['[1, 2, 3]'],
		[{}],
		[null],
		[undefined],
	])('given a non-vector min throws', (min) => {
		// Arrange
		const v = [1, 2, 3];
		const max = [1, 2, 3];

		// Act + Assert
		expect(() => clamp(v, min, max)).toThrow('should be an Array or TypedArray');
	});

	test.each([
		['[1, 2, 3]'],
		[{}],
		[null],
		[undefined],
	])('given a non-vector max throws', (max) => {
		// Arrange
		const v = [1, 2, 3];
		const min = [1, 2, 3];

		// Act + Assert
		expect(() => clamp(v, min, max)).toThrow('should be an Array or TypedArray');
	});
});
