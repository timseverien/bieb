const { componentWise } = require('./vector');

describe('componentWise', () => {
	test('given operator returns function', () => {
		// Arrange
		const operator = () => 0;

		// Act
		const result = componentWise(operator);

		// Assert
		expect(typeof result).toBe('function');
	});

	test('given operator calls operator for each component', () => {
		// Arrange
		const a = [1, 2, 3];
		const b = [3, 4, 5];
		const operator = jest.fn();
		const apply = componentWise(operator);

		// Act
		apply(a, b);

		// Assert
		expect(operator).toHaveBeenCalledWith(a[0], b[0]);
		expect(operator).toHaveBeenCalledWith(a[1], b[1]);
		expect(operator).toHaveBeenCalledWith(a[2], b[2]);
	});

	test('given operator returns a new vector with return values from the operator', () => {
		// Arrange
		const a = [1, 2, 3];
		const b = [3, 4, 5];
		const operator = jest.fn((v1, v2) => v1 + v2);
		const apply = componentWise(operator);

		// Act
		const result = apply(a, b);

		// Assert
		expect(result).toMatchObject([4, 6, 8]);
	});

	test.each([
		[[1, 2, 3]],
		[123],
		[null],
		[undefined],
	])('given invalid operator throws', (operator) => {
		// Act + Assert
		expect(() => componentWise(operator)).toThrow('is not a function');
	});

	test('given vectors keeps original vectors intact', () => {
		// Arrange
		const a = [1, 2, 3];
		const b = [3, 4, 5];
		const operator = jest.fn();
		const apply = componentWise(operator);

		// Act
		apply(a, b);

		// Assert
		expect(a).toMatchObject([1, 2, 3]);
		expect(b).toMatchObject([3, 4, 5]);
	});

	test.each([
		[[1, 2, 3], '[1, 2, 3]'],
		[[1, 2, 3], null],
		[[1, 2, 3], undefined],
		['[1, 2, 3]', [1, 2, 3]],
		[null, [1, 2, 3]],
		[undefined, [1, 2, 3]],
		['[1, 2, 3]', '[1, 2, 3]'],
		[null, null],
		[undefined, undefined],
	])('given a non-array throws', (a, b) => {
		// Arrange
		const operator = () => 0;
		const apply = componentWise(operator);

		// Act + Assert
		expect(() => apply(a, b)).toThrow('should be an Array or TypedArray');
	});

	test.each([
		[[1, 2, 3], [3, 4]],
		[[3, 4], [1, 2, 3]],
	])('given vectors with different sizes throws', (a, b) => {
		// Arrange
		const operator = () => 0;
		const apply = componentWise(operator);

		// Act + Assert
		expect(() => apply(a, b)).toThrow('have different sizes');
	});
});
