const assertVector = require('./assertVector').default;

describe('assertVector', () => {
	test('given Array vector returns true', () => {
		// Arrange
		const vector = [1, 2];

		// Act
		const result = assertVector(vector);

		// Assert
		expect(result).toBe(true);
	});

	test('given TypedArray vector returns true', () => {
		// Arrange
		const vector = Float32Array.from([1, 2]);

		// Act
		const result = assertVector(vector);

		// Assert
		expect(result).toBe(true);
	});

	test('given vector with string component throws', () => {
		// Arrange
		const vector = ['1', '2'];

		// Act + Assert
		expect(() => assertVector(vector)).toThrow('should be a number');
	});

	test.each([
		['[1, 2]'],
		[{ 0: 1, 1: 2 }],
		[null],
		[undefined],
	])('given invalid vector throws', (vector) => {
		// Act + Assert
		expect(() => assertVector(vector)).toThrow('should be an Array or TypedArray');
	});

	test.each([
		[[1, '0']],
		[[1, {}]],
		[[1, null]],
		[[1, undefined]],
	])('given invalid vector values throws', (vector) => {
		// Act + Assert
		expect(() => assertVector(vector)).toThrow('should be a number');
	});
});
