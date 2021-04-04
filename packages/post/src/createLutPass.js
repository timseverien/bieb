import { LUTPass } from 'three/examples/jsm/postprocessing/LUTPass';

export default function createLutPass({
	intensity = 1,
	lut = null,
} = {}) {
	return () => new LUTPass({ intensity, lut });
}
