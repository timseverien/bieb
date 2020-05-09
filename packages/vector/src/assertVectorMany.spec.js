jest.mock('./assertVector');

const { assertVector, assertVectorMany } = require('./vector');

beforeEach(() => {
	assertVector.mockReset();
});

describe('assertVectorMany', () => {
	test('given one vector calls assertVector', () => {
		// Arrange
		const vector = [1, 2];

		// Act
		assertVectorMany(vector);

		// Assert
		expect(assertVector).toBeCalled();
	});

	test('given one vector returns true', () => {
		// Arrange
		const vector = [1, 2];

		// Act
		const result = assertVectorMany(vector);

		// Assert
		expect(result).toBe(true);
	});

	test('given vectors calls assertVector', () => {
		// Arrange
		const a = [1, 2];
		const b = [2, 3];
		const c = [3, 4];

		// Act
		assertVectorMany(a, b, c);

		// Assert
		expect(assertVector).toBeCalledTimes(3);
	});
});
