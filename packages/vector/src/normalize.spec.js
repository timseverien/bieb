const { normalize } = require('./vector');

describe('normalize', () => {
	test('returns a normalized vector', () => {
		// Arrange
		const vector = [2, 0];

		// Act
		const result = normalize(vector);

		// Assert
		expect(result).toMatchObject([1, 0]);
	});

	test.each([
		['[1, 2, 3]'],
		[{}],
		[null],
		[undefined],
	])('given a non-vector throws', (vector) => {
		// Act + Assert
		expect(() => normalize(vector)).toThrow('should be an Array or TypedArray');
	});
});
