const getMagnitudeSquared = require('./get-magnitude-squared').default;

describe('getMagnitudeSquared', () => {
	test('given vector returns its magnitude', () => {
		// Arrange
		const v = [4, 4];

		// Act
		const result = getMagnitudeSquared(v);

		// Assert
		expect(result).toBe(32);
	});

	test.each([
		['[1, 2, 3]'],
		[null],
		[undefined],
	])('given a non-array throws', (vector) => {
		// Act + Assert
		expect(() => getMagnitudeSquared(vector)).toThrow('should be an Array or TypedArray');
	});
});
