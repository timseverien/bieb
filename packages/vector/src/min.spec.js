const { min } = require('./vector');

describe('min', () => {
	test('given two vectors returns a vector containing the smaller components of each', () => {
		// Arrange
		const a = [1, 2, 3];
		const b = [4, 3, 2];

		// Act
		const result = min(a, b);

		// Assert
		expect(result).toMatchObject([1, 2, 2]);
	});

	test.each([
		['[1, 2, 3]', [1, 2, 3]],
		[{}, [1, 2, 3]],
		[null, [1, 2, 3]],
		[undefined, [1, 2, 3]],
		[[1, 2, 3], '[1, 2, 3]'],
		[[1, 2, 3], {}],
		[[1, 2, 3], null],
		[[1, 2, 3], undefined],
	])('given a non-vector throws', (a, b) => {
		// Act + Assert
		expect(() => min(a, b)).toThrow('should be an Array or TypedArray');
	});
});
