const assertVector = require('./assert-vector').default;

describe('assertVector', () => {
	test('given vector returns true', () => {
		// Arrange
		const vector = [1, 2];

		// Act
		const result = assertVector(vector);

		// Assert
		expect(result).toBe(true);
	});

	test.each([
		['[1, 2]'],
		[null],
		[undefined],
	], 'given invalid vector throws', (vector) => {
		// Act + Assert
		expect(() => assertVector(vector)).toThrow('should be an Array or TypedArray');
	});
});
