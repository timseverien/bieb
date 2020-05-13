export default function assertNumber(number) {
	if (typeof number !== 'number') {
		throw new Error(`Number "${number}" should be a number`);
	}

	return true;
}
