const { max } = require('./vector');

describe('max', () => {
	test('given two vectors returns a vector containing the larger components of each', () => {
		// Arrange
		const a = [1, 2, 3];
		const b = [4, 3, 2];

		// Act
		const result = max(a, b);

		// Assert
		expect(result).toMatchObject([4, 3, 3]);
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
		expect(() => max(a, b)).toThrow('should be an Array or TypedArray');
	});
});
