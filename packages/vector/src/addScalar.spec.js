const { addScalar } = require('./vector');

describe('addScalar', () => {
	test('given vector and scalar returns a vector containing the sum of each component', () => {
		// Arrange
		const vector = [1, 2, 3];
		const scalar = 4;

		// Act
		const result = addScalar(vector, scalar);

		// Assert
		expect(result).toMatchObject([5, 6, 7]);
	});

	test.each([
		['[1, 2, 3]'],
		[{}],
		[null],
		[undefined],
	])('given a non-vector throws', (vector) => {
		// Arrange
		const scalar = 4;

		// Act + Assert
		expect(() => addScalar(vector, scalar)).toThrow('should be an Array or TypedArray');
	});

	test.each([
		['4'],
		[[]],
		[{}],
		[null],
		[undefined],
	])('given a non-scalar throws', (scalar) => {
		// Arrange
		const vector = [1, 2, 3];

		// Act + Assert
		expect(() => addScalar(vector, scalar)).toThrow('should be a number');
	});
});
