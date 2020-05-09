const { create } = require('./box');

describe('create', () => {
	test('given min and max creates a box object', () => {
		// Arrange
		const min = [1, 2];
		const max = [2, 3];

		// Act
		const box = create(min, max);

		// Assert
		expect(box).toMatchObject({
			max: [2, 3],
			min: [1, 2],
		});
	});

	test('given min and max with different dimensions throws', () => {
		// Arrange
		const min = [1, 2];
		const max = [2, 3, 4];

		// Act + Assert
		expect(() => create(min, max)).toThrow('have different sizes');
	});

	test.each([
		['1'],
		[{}],
		[1],
		[null],
		[undefined],
	])('given invalid min throws', (min) => {
		// Arrange
		const max = [2, 3];

		// Act + Assert
		expect(() => create(min, max)).toThrow('should be an Array or TypedArray');
	});

	test.each([
		['2'],
		[{}],
		[2],
		[null],
		[undefined],
	])('given invalid max throws', (max) => {
		// Arrange
		const min = [1, 2];

		// Act + Assert
		expect(() => create(min, max)).toThrow('should be an Array or TypedArray');
	});
});
