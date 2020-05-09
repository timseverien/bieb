jest.mock('./assertVector');

const assertVector = require('./assertVector').default;
const assertVectorEqualSize = require('./assertVectorEqualSize').default;

beforeEach(() => {
	assertVector.mockReset();
});

describe('assertVectorEqualSize', () => {
	test('given one vector throws', () => {
		// Arrange
		const vector = [1, 2];

		// Act + Assert
		expect(() => assertVectorEqualSize(vector)).toThrow('Need at least two vectors to compare their lengths');
	});

	test('given vectors calls assertVector', () => {
		// Arrange
		const a = [1, 2];
		const b = [2, 3];
		const c = [3, 4];

		// Act
		assertVectorEqualSize(a, b, c);

		// Assert
		expect(assertVector).toHaveBeenCalledTimes(3);
	});

	test('given vectors returns true', () => {
		// Arrange
		const a = [1, 2];
		const b = [2, 3];
		const c = [3, 4];

		// Act
		const result = assertVectorEqualSize(a, b, c);

		// Assert
		expect(result).toBe(true);
	});

	test('given vectors of inequal size throws', () => {
		// Arrange
		const a = [1, 2];
		const b = [2, 3, 4];

		// Act + Assert
		expect(() => assertVectorEqualSize(a, b)).toThrow('have different sizes');
	});
});
