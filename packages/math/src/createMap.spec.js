const { createMix } = require('./math');

describe('createMix', () => {
	test('given start, end, returns a function', () => {
		// Arrange
		const start = 1;
		const end = 3;

		// Act
		const result = createMix(start, end);

		// Assert
		expect(typeof result).toBe('function');
	});

	test('given value to returned function returns interpolated value', () => {
		// Arrange
		const mix = createMix(1, 3);

		// Act
		const result1 = mix(0);
		const result2 = mix(0.5);
		const result3 = mix(1);

		// Assert
		expect(result1).toBe(1);
		expect(result2).toBe(2);
		expect(result3).toBe(3);
	});

	test.each([
		['0'],
		[[0]],
		[{}],
		[null],
		[undefined],
	])('given invalid value to returned function throws', (value) => {
		// Arrange
		const mix = createMix(0, 1);

		// Act + Assert
		expect(() => mix(value)).toThrow('should be a number');
	});

	test.each([
		['0'],
		[[0]],
		[{}],
		[null],
		[undefined],
	])('given invalid start throws', (start) => {
		// Act + Assert
		expect(() => createMix(start, 1)(0)).toThrow('should be a number');
	});

	test.each([
		['0'],
		[[0]],
		[{}],
		[null],
		[undefined],
	])('given invalid end throws', (end) => {
		// Act + Assert
		expect(() => createMix(0, end)(0)).toThrow('should be a number');
	});
});
