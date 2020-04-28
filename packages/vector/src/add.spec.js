const add = require('./add').default;

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
		expect(() => add(a, b)).toThrow('should be an Array or TypedArray');
	});

	test.each([
		[[1, 2, 3], [3, 4]],
		[[3, 4], [1, 2, 3]],
	])('given vectors with different sizes throws', (a, b) => {
		// Act + Assert
		expect(() => add(a, b)).toThrow('have different sizes');
	});
});
