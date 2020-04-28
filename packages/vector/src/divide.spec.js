const { divide } = require('./vector');

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
		expect(() => divide(a, b)).toThrow('should be an Array or TypedArray');
	});

	test.each([
		[[1, 2, 3], [3, 4]],
		[[3, 4], [1, 2, 3]],
	])('given vectors with different sizes throws', (a, b) => {
		// Act + Assert
		expect(() => divide(a, b)).toThrow('have different sizes');
	});
});
