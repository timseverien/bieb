import IVector from '../types/vector';

export default function assertEqualLength(vector: IVector, ...vectors: IVector[]): boolean {
	const { length } = vector;

	for (const v of vectors) {
		if (v.length !== length) {
			throw new Error(`Vectors ${[vector, ...vectors]} have different sizes`);
		}
	}

	return true;
}
