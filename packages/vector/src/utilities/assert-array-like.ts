import IVector from '../types/vector';

export default function assertArrayLike(vector: IVector): boolean {
	if (!Array.isArray(vector) && !ArrayBuffer.isView(vector)) {
		throw new Error(`Vector ${vector} should be an Array or TypedArray`);
	}

	return true;
}
