export default interface IVector {
	[index: number]: number;
	[Symbol.iterator](): Iterator<number>;
	length: number;
};
