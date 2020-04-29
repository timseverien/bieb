import assertVector from './assertVector';
import IVector from '../types/vector';

export default function assertVectorMany(...vectors: IVector[]): boolean {
	for (const vector of vectors) {
		assertVector(vector);
	}

	return true;
}
