const { componentWiseScalar } = require('./vector');

describe('componentWiseScalar', () => {
	test('given operator returns function', () => {
		// Arrange
		const operator = () => 0;

		// Act
		const result = componentWiseScalar(operator);

		// Assert
		expect(typeof result).toBe('function');
	});

	test('given operator calls operator for each component', () => {
		// Arrange
		const vector = [1, 2, 3];
		const scalar = 4;
		const operator = jest.fn();
		const apply = componentWiseScalar(operator);

		// Act
		apply(vector, scalar);

		// Assert
		expect(operator).toHaveBeenCalledWith(vector[0], scalar);
		expect(operator).toHaveBeenCalledWith(vector[1], scalar);
		expect(operator).toHaveBeenCalledWith(vector[2], scalar);
	});

	test('given operator returns a new vector with return values from the operator', () => {
		// Arrange
		const vector = [1, 2, 3];
		const scalar = 4;
		const operator = jest.fn((v1, v2) => v1 + v2);
		const apply = componentWiseScalar(operator);

		// Act
		const result = apply(vector, scalar);

		// Assert
		expect(result).toMatchObject([5, 6, 7]);
	});

	test.each([
		[[1, 2, 3]],
		[123],
		[null],
		[undefined],
	])('given invalid operator throws', (operator) => {
		// Act + Assert
		expect(() => componentWiseScalar(operator)).toThrow('is not a function');
	});

	test('given vectors keeps original vector intact', () => {
		// Arrange
		const vector = [1, 2, 3];
		const scalar = 4;
		const operator = jest.fn();
		const apply = componentWiseScalar(operator);

		// Act
		apply(vector, scalar);

		// Assert
		expect(vector).toMatchObject([1, 2, 3]);
	});

	test.each([
		['[1, 2, 3]'],
		[{}],
		[null],
		[undefined],
	])('given a non-vector throws', (vector) => {
		// Arrange
		const operator = () => 0;
		const scalar = 4;
		const apply = componentWiseScalar(operator);

		// Act + Assert
		expect(() => apply(vector, scalar)).toThrow('should be an Array or TypedArray');
	});

	test.each([
		['4'],
		[[]],
		[{}],
		[null],
		[undefined],
	])('given a non-scalar throws', (scalar) => {
		// Arrange
		const operator = () => 0;
		const vector = [1, 2, 3];
		const apply = componentWiseScalar(operator);

		// Act + Assert
		expect(() => apply(vector, scalar)).toThrow('should be a number');
	});
});
