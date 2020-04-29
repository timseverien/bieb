const { fromPolar } = require('./vector');

describe('fromPolar', () => {
	test('given angle returns vector', () => {
		// Arrange
		const angle = 0;

		// Act
		const result = fromPolar(angle);

		// Assert
		expect(result).toMatchObject([1, 0]);
	});

	test.each([
		['0'],
		[[]],
		[{}],
		[null],
		[undefined],
	])('given invalid angle throws', (angle) => {
		// Act + Assert
		expect(() => fromPolar(angle)).toThrow('should be a number');
	});

	test.each([
		['0'],
		[[]],
		[{}],
		[null],
	])('given invalid radius throws', (radius) => {
		// Arrange
		const angle = 0;

		// Act + Assert
		expect(() => fromPolar(angle, radius)).toThrow('should be a number');
	});

	test('given radius returns vector with given length', () => {
		// Arrange
		const angle = 0;
		const radius = 3;

		// Act
		const result = fromPolar(angle, radius);

		// Assert
		expect(result).toMatchObject([3, 0]);
	});
});
