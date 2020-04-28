jest.mock('./assert-array-like');

const assertArrayLikeMany = require('./assert-array-like-many').default;
const assertArrayLike = require('./assert-array-like').default;

beforeEach(() => {
	assertArrayLike.mockReset();
});

describe('assertArrayLikeMany', () => {
	test('given one vector calls assertArrayLike', () => {
		// Arrange
		const vector = [1, 2];

		// Act
		assertArrayLikeMany(vector);

		// Assert
		expect(assertArrayLike).toBeCalled();
	});

	test('given one vector returns true', () => {
		// Arrange
		const vector = [1, 2];

		// Act
		const result = assertArrayLikeMany(vector);

		// Assert
		expect(result).toBe(true);
	});

	test('given vectors calls assertArrayLike', () => {
		// Arrange
		const a = [1, 2];
		const b = [2, 3];
		const c = [3, 4];

		// Act
		assertArrayLikeMany(a, b, c);

		// Assert
		expect(assertArrayLike).toBeCalledTimes(3);
	});
});
