const { getMagnitude } = require('./vector');

describe('getMagnitude', () => {
	test('given vector returns its magnitude', () => {
		// Arrange
		const v = [4, 4];

		// Act
		const result = getMagnitude(v);

		// Assert
		expect(result).toBe(Math.hypot(4, 4));
	});

	test.each([
		['[1, 2, 3]'],
		[null],
		[undefined],
	])('given a non-array throws', (vector) => {
		// Act + Assert
		expect(() => getMagnitude(vector)).toThrow('should be an Array or TypedArray');
	});
});
