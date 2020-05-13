import assertVector from './assertVector';

export default function assertVectorMany(...vectors) {
	for (const vector of vectors) {
		assertVector(vector);
	}

	return true;
}
