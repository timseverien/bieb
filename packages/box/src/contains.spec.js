const { contains } = require('./box');

describe('contains', () => {
	test('given box and vector in box returns true', () => {
		// Arrange
		const box = {
			min: [0, 0],
			max: [2, 2],
		};

		const vector = [1, 1];

		// Act
		const result = contains(box, vector);

		// Assert
		expect(result).toBe(true);
	});

	test('given box and vector of inequal lengths throws', () => {
		// Arrange
		const box = {
			min: [0, 0],
			max: [2, 2],
		};

		const vector = [1, 2, 3];

		// Act + Assert
		expect(() => contains(box, vector)).toThrow('have different sizes');
	});

	test('given box and vector outside box returns false', () => {
		// Arrange
		const box = {
			min: [0, 0],
			max: [2, 2],
		};

		const vector = [3, 3];

		// Act
		const result = contains(box, vector);

		// Assert
		expect(result).toBe(false);
	});

	test.each([
		[[0, 0, 2, 2]],
		[{ max: [2, 2] }],
		[{ min: [0, 0] }],
		[null],
		[undefined],
	])('given invalid box throws', (box) => {
		// Arrange
		const vector = [1, 2];

		// Act + Assert
		expect(() => contains(box, vector)).toThrow('should be an IBox');
	});

	test.each([
		['[1, 2]'],
		[{ 0: 1, 1: 2 }],
		[null],
		[undefined],
	])('given invalid vector throws', (vector) => {
		// Arrange
		const box = {
			min: [0, 0],
			max: [2, 2],
		};

		// Act + Assert
		expect(() => contains(box, vector)).toThrow('should be an Array or TypedArray');
	});
});
