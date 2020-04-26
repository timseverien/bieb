import assertArrayLike from './assert-array-like';
import IVector from '../types/vector';

export default function assertArrayLikeMany(...vectors: IVector[]): boolean {
	for (const vector of vectors) {
		assertArrayLike(vector);
	}

	return true;
}
