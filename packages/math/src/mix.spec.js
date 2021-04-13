const { mix } = require('./math');

describe('mix', () => {
	test('given start, end, and t, returns interpolated value between start and end', () => {
		// Arrange
		const start = 1;
		const end = 2;

		// Act
		const result1 = mix(start, end, 0);
		const result2 = mix(start, end, 0.5);
		const result3 = mix(start, end, 1);

		// Assert
		expect(result1).toBe(1);
		expect(result2).toBe(1.5);
		expect(result3).toBe(2);
	});

	test('given t greater than 1 returns extrapolated value', () => {
		// Arrange
		const start = 4;
		const end = 6;

		// Act
		const result = mix(start, end, 1.5);

		// Assert
		expect(result).toBe(7);
	});

	test('given t less than 0 returns negatively extrapolated value', () => {
		// Arrange
		const start = 4;
		const end = 6;

		// Act
		const result = mix(start, end, -0.5);

		// Assert
		expect(result).toBe(3);
	});

	test.each([
		['0'],
		[[0]],
		[{}],
		[null],
		[undefined],
	])('given invalid start throws', (start) => {
		// Act + Assert
		expect(() => mix(start, 8, 0.5)).toThrow('should be a number');
	});

	test.each([
		['0'],
		[[0]],
		[{}],
		[null],
		[undefined],
	])('given invalid end throws', (end) => {
		// Act + Assert
		expect(() => mix(0, end, 0.5)).toThrow('should be a number');
	});

	test.each([
		['0'],
		[[0]],
		[{}],
		[null],
		[undefined],
	])('given invalid t throws', (t) => {
		// Act + Assert
		expect(() => mix(0, 1, t)).toThrow('should be a number');
	});
});
