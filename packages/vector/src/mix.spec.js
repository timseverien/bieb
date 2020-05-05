const { mix } = require('./vector');

describe('mix', () => {
	test('given two vectors and number returns a vector where each component is the linear interpolated value', () => {
		// Arrange
		const a = [1, 2, 3];
		const b = [4, 3, 2];
		const t = 0.5;

		// Act
		const result = mix(a, b, t);

		// Assert
		expect(result).toMatchObject([2.5, 2.5, 2.5]);
	});

	test.each([
		['[1, 2, 3]'],
		[{}],
		[null],
		[undefined],
	])('given a non-vector a-side throws', (a) => {
		// Arrange
		const b = [1, 2, 3];
		const t = 0.5;

		// Act + Assert
		expect(() => mix(a, b, t)).toThrow('should be an Array or TypedArray');
	});

	test.each([
		['[1, 2, 3]'],
		[{}],
		[null],
		[undefined],
	])('given a non-vector b-side throws', (b) => {
		// Arrange
		const a = [1, 2, 3];
		const t = 0.5;

		// Act + Assert
		expect(() => mix(a, b, t)).toThrow('should be an Array or TypedArray');
	});

	test.each([
		['0.5'],
		[{}],
		[null],
		[undefined],
	])('given a invalid t throws', (t) => {
		// Arrange
		const a = [1, 2, 3];
		const b = [1, 2, 3];

		// Act + Assert
		expect(() => mix(a, b, t)).toThrow('should be a number');
	});
});
