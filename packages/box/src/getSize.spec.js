const { getSize } = require('./box');

describe('getSize', () => {
	test('given box returns size of each dimension', () => {
		// Arrange
		const box = {
			min: [1, 2, 3],
			max: [2, 4, 6],
		};

		// Act
		const result = getSize(box);

		// Assert
		expect(result).toMatchObject([1, 2, 3]);
	});

	test.each([
		[[0, 0, 2, 2]],
		[{ max: [2, 2] }],
		[{ min: [0, 0] }],
		[null],
		[undefined],
	])('given invalid box throws', (box) => {
		// Act + Assert
		expect(() => getSize(box)).toThrow('should be an IBox');
	});
});
