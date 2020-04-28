const assertArrayLike = require('./assert-array-like').default;

describe('assertArrayLike', () => {
	test('given vector returns true', () => {
		// Arrange
		const vector = [1, 2];

		// Act
		const result = assertArrayLike(vector);

		// Assert
		expect(result).toBe(true);
	});

	test.each([
		['[1, 2]'],
		[null],
		[undefined],
	], 'given invalid vector throws', (vector) => {
		// Act + Assert
		expect(() => assertArrayLike(vector)).toThrow('should be an Array or TypedArray');
	});
});
