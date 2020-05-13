import assertNumber from '@bieb/core/src/assertNumber';

export default function assertVector(vector) {
	if (!Array.isArray(vector) && !ArrayBuffer.isView(vector)) {
		throw new Error(`Vector ${vector} should be an Array or TypedArray`);
	}

	if (Array.isArray(vector)) {
		for (const c of vector) {
			assertNumber(c);
		}
	}

	return true;
}
