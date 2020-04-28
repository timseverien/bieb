const getMagnitudeSquared = require('../lib/get-magnitude-squared.cjs');

describe('getMagnitudeSquared', () => {
	test('given vector returns its magnitude', () => {
		// Arrange
		const v = [4, 4];

		// Act
		const result = getMagnitudeSquared(v);

		// Assert
		expect(result).toBe(32);
	});

	test('given a non-array throws', () => {
		// Arrange
		const v = '1, 2, 3';

		// Act + Assert
		expect(() => getMagnitudeSquared(v)).toThrow('is not an Array or TypedArray');
	});
});
