const { negate } = require('./vector');

describe('negate', () => {
	test('given vector returns a negated vector', () => {
		// Arrange
		const vector = [1, 2, 3];

		// Act
		const result = negate(vector);

		// Assert
		expect(result).toMatchObject([-1, -2, -3]);
	});

	test.each([
		['[1, 2, 3]'],
		[{}],
		[null],
		[undefined],
	])('given a non-vector throws', (vector) => {
		// Act + Assert
		expect(() => negate(vector)).toThrow('should be an Array or TypedArray');
	});
});
