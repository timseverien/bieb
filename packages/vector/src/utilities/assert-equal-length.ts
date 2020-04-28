import IVector from '../types/vector';
import assertArrayLikeMany from './assert-array-like-many';

export default function assertEqualLength(vector: IVector, ...vectors: IVector[]): boolean {
	assertArrayLikeMany(vector, ...vectors);

	const { length } = vector;

	if (vectors.length === 0) {
		throw new Error('Need at least two vectors to compare their lengths');
	}

	for (const v of vectors) {
		if (v.length !== length) {
			throw new Error(`Vectors ${JSON.stringify([vector, ...vectors])} have different sizes`);
		}
	}

	return true;
}
