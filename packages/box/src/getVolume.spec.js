const { getVolume } = require('./box');

describe('getVolume', () => {
	test('given 3D box should return volume', () => {
		// Arrange
		const box = {
			min: [0, 0, 0],
			max: [2, 2, 2],
		};

		// Act
		const result = getVolume(box);

		// Assert
		expect(result).toBe(8);
	});

	test('given 4D box should return volume', () => {
		// Arrange
		const box = {
			min: [0, 0, 0, 0],
			max: [2, 2, 2, 2],
		};

		// Act
		const result = getVolume(box);

		// Assert
		expect(result).toBe(16);
	});

	test.each([
		[{ min: 0, max: 0 }],
	])('given invalid box should throw', (box) => {
		// Act + Assert
		expect(() => getVolume(box)).toThrow('should be a box');
	});
});
