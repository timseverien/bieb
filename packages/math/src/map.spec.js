const { map } = require('./math');

describe('map', () => {
	test('given domainStart, domainEnd, rangeStart, rangeEnd, and value, returns remapped value between rangeStart and rangeEnd', () => {
		// Arrange
		const domainStart = 1;
		const domainEnd = 3;
		const rangeStart = 3;
		const rangeEnd = 5;

		// Act
		const result1 = map(domainStart, domainEnd, rangeStart, rangeEnd, 1);
		const result2 = map(domainStart, domainEnd, rangeStart, rangeEnd, 2);
		const result3 = map(domainStart, domainEnd, rangeStart, rangeEnd, 3);

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
	])('given invalid domainStart throws', (domainStart) => {
		// Act + Assert
		expect(() => map(domainStart, 1, 0, 1, 0)).toThrow('should be a number');
	});

	test.each([
		['0'],
		[[0]],
		[{}],
		[null],
		[undefined],
	])('given invalid domainEnd throws', (domainEnd) => {
		// Act + Assert
		expect(() => map(0, domainEnd, 0, 1, 0)).toThrow('should be a number');
	});

	test.each([
		['0'],
		[[0]],
		[{}],
		[null],
		[undefined],
	])('given invalid rangeStart throws', (rangeStart) => {
		// Act + Assert
		expect(() => map(0, 1, rangeStart, 1, 0)).toThrow('should be a number');
	});

	test.each([
		['0'],
		[[0]],
		[{}],
		[null],
		[undefined],
	])('given invalid rangeEnd throws', (rangeEnd) => {
		// Act + Assert
		expect(() => map(0, 1, 0, rangeEnd, 0)).toThrow('should be a number');
	});

	test.each([
		['0'],
		[[0]],
		[{}],
		[null],
		[undefined],
	])('given invalid value throws', (value) => {
		// Act + Assert
		expect(() => map(0, 1, 0, 1, value)).toThrow('should be a number');
	});
});
