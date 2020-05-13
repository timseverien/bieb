const { grow } = require('./box');

describe('grow', () => {
	test('given box and vector in box returns a new identical box', () => {
		// Arrange
		const box = {
			min: [0, 0],
			max: [2, 2],
		};

		const vector = [1, 1];

		// Act
		const result = grow(box, vector);

		// Assert
		expect(result).toMatchObject({
			min: [0, 0],
			max: [2, 2],
		});
	});

	test('given box and vector of inequal lengths throws', () => {
		// Arrange
		const box = {
			min: [0, 0],
			max: [2, 2],
		};

		const vector = [1, 2, 3];

		// Act + Assert
		expect(() => grow(box, vector)).toThrow('have different sizes');
	});

	test('given box and vector outside box returns a new box', () => {
		// Arrange
		const box = {
			min: [0, 0],
			max: [2, 2],
		};

		const vector = [3, 3];

		// Act
		const result = grow(box, vector);

		// Assert
		expect(result).toMatchObject({
			min: [0, 0],
			max: [3, 3],
		});
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
		expect(() => grow(box, vector)).toThrow('should be a box');
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
		expect(() => grow(box, vector)).toThrow('should be an Array or TypedArray');
	});
});
