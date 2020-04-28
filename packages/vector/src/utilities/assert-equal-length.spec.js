jest.mock('./assert-array-like');

const assertArrayLike = require('./assert-array-like').default;
const assertEqualLength = require('./assert-equal-length').default;

beforeEach(() => {
	assertArrayLike.mockReset();
});

describe('assertEqualLength', () => {
	test('given one vector throws', () => {
		// Arrange
		const vector = [1, 2];

		// Act + Assert
		expect(() => assertEqualLength(vector)).toThrow('Need at least two vectors to compare their lengths');
	});

	test('given vectors calls assertArrayLike', () => {
		// Arrange
		const a = [1, 2];
		const b = [2, 3];
		const c = [3, 4];

		// Act
		assertEqualLength(a, b, c);

		// Assert
		expect(assertArrayLike).toHaveBeenCalledTimes(3);
	});

	test('given vectors returns true', () => {
		// Arrange
		const a = [1, 2];
		const b = [2, 3];
		const c = [3, 4];

		// Act
		const result = assertEqualLength(a, b, c);

		// Assert
		expect(result).toBe(true);
	});

	test('given vectors of inequal size throws', () => {
		// Arrange
		const a = [1, 2];
		const b = [2, 3, 4];

		// Act + Assert
		expect(() => assertEqualLength(a, b)).toThrow('have different sizes');
	});
});
