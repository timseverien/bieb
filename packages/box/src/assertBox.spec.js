const { assertBox } = require('./box');

describe('assertBox', () => {
	test('given box should return true', () => {
		// Arrange
		const box = {
			min: [0, 0],
			max: [2, 2],
		};

		// Act
		const result = assertBox(box);

		// Assert
		expect(result).toBe(true);
	});

	test.each([
		[[0, 0, 2, 2]],
		[{ max: [2, 2] }],
		[{ min: [0, 0] }],
		[null],
		[undefined],
	])('given invalid box throws', (box) => {
		// Act + Assert
		expect(() => assertBox(box)).toThrow('should be an IBox');
	});
});
