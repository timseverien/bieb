import IVector from '../types/vector';
import assertVectorMany from './assert-vector-many';

export default function assertVectorEqualSize(vector: IVector, ...vectors: IVector[]): boolean {
	assertVectorMany(vector, ...vectors);

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
