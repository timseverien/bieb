export default interface IVector {
	new (length: number);
	[index: number]: number;
	length: number;
};
