const { multiplyScalar } = require('./vector');

describe('multiplyScalar', () => {
	test('given vector and scalar returns a vector containing the sum of each component', () => {
		// Arrange
		const vector = [1, 2, 3];
		const scalar = 4;

		// Act
		const result = multiplyScalar(vector, scalar);

		// Assert
		expect(result).toMatchObject([4, 8, 12]);
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
		expect(() => multiplyScalar(vector, scalar)).toThrow('should be an Array or TypedArray');
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
		expect(() => multiplyScalar(vector, scalar)).toThrow('should be a number');
	});
});
