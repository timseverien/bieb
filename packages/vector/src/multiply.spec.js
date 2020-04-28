const { multiply } = require('./vector');

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

	test.each([
		[[1, 2, 3], '[1, 2, 3]'],
		[[1, 2, 3], null],
		[[1, 2, 3], undefined],
		['[1, 2, 3]', [1, 2, 3]],
		[null, [1, 2, 3]],
		[undefined, [1, 2, 3]],
		['[1, 2, 3]', '[1, 2, 3]'],
		[null, null],
		[undefined, undefined],
	])('given a non-array throws', (a, b) => {
		// Act + Assert
		expect(() => multiply(a, b)).toThrow('should be an Array or TypedArray');
	});

	test.each([
		[[1, 2, 3], [3, 4]],
		[[3, 4], [1, 2, 3]],
	])('given vectors with different sizes throws', (a, b) => {
		// Act + Assert
		expect(() => multiply(a, b)).toThrow('have different sizes');
	});
});
