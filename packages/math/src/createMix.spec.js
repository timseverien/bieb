const { createMap } = require('./math');

describe('createMap', () => {
	test('given domainStart, domainEnd, rangeStart, rangeEnd, returns a function', () => {
		// Arrange
		const domainStart = 1;
		const domainEnd = 3;
		const rangeStart = 3;
		const rangeEnd = 5;

		// Act
		const result = createMap(domainStart, domainEnd, rangeStart, rangeEnd);

		// Assert
		expect(typeof result).toBe('function');
	});

	test('given value to returned function returns interpolated value', () => {
		// Arrange
		const map = createMap(1, 3, 3, 5);

		// Act
		const result1 = map(1);
		const result2 = map(2);
		const result3 = map(3);

		// Assert
		expect(result1).toBe(3);
		expect(result2).toBe(4);
		expect(result3).toBe(5);
	});

	test.each([
		['0'],
		[[0]],
		[{}],
		[null],
		[undefined],
	])('given invalid value to returned function throws', (value) => {
		// Arrange
		const map = createMap(0, 1, 0, 1);

		// Act + Assert
		expect(() => map(value)).toThrow('should be a number');
	});

	test.each([
		['0'],
		[[0]],
		[{}],
		[null],
		[undefined],
	])('given invalid domainStart throws', (domainStart) => {
		// Act + Assert
		expect(() => createMap(domainStart, 1, 0, 1)).toThrow('should be a number');
	});

	test.each([
		['0'],
		[[0]],
		[{}],
		[null],
		[undefined],
	])('given invalid domainEnd throws', (domainEnd) => {
		// Act + Assert
		expect(() => createMap(0, domainEnd, 0, 1)).toThrow('should be a number');
	});

	test.each([
		['0'],
		[[0]],
		[{}],
		[null],
		[undefined],
	])('given invalid rangeStart throws', (rangeStart) => {
		// Act + Assert
		expect(() => createMap(0, 1, rangeStart, 1)).toThrow('should be a number');
	});

	test.each([
		['0'],
		[[0]],
		[{}],
		[null],
		[undefined],
	])('given invalid rangeEnd throws', (rangeEnd) => {
		// Act + Assert
		expect(() => createMap(0, 1, 0, rangeEnd)).toThrow('should be a number');
	});
});
