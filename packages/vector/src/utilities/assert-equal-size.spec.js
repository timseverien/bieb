jest.mock('./assert-vector');

const assertVector = require('./assert-vector').default;
const assertEqualSize = require('./assert-equal-size').default;

beforeEach(() => {
	assertVector.mockReset();
});

describe('assertEqualSize', () => {
	test('given one vector throws', () => {
		// Arrange
		const vector = [1, 2];

		// Act + Assert
		expect(() => assertEqualSize(vector)).toThrow('Need at least two vectors to compare their lengths');
	});

	test('given vectors calls assertVector', () => {
		// Arrange
		const a = [1, 2];
		const b = [2, 3];
		const c = [3, 4];

		// Act
		assertEqualSize(a, b, c);

		// Assert
		expect(assertVector).toHaveBeenCalledTimes(3);
	});

	test('given vectors returns true', () => {
		// Arrange
		const a = [1, 2];
		const b = [2, 3];
		const c = [3, 4];

		// Act
		const result = assertEqualSize(a, b, c);

		// Assert
		expect(result).toBe(true);
	});

	test('given vectors of inequal size throws', () => {
		// Arrange
		const a = [1, 2];
		const b = [2, 3, 4];

		// Act + Assert
		expect(() => assertEqualSize(a, b)).toThrow('have different sizes');
	});
});
