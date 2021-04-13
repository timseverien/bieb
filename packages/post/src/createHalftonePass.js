import { HalftonePass } from 'three/examples/jsm/postprocessing/HalftonePass';

export default function createHalftonePass({
	blending = 1,
	blendingMode = 1,
	disable = false,
	greyscale = false,
	radius = 8,
	rotateB = (Math.PI / 9) * 0,
	rotateG = (Math.PI / 9) * 1,
	rotateR = (Math.PI / 9) * 2,
	scatter = 0,
	shape = 1,
} = {}) {
	return (width, height) => new HalftonePass(width, height, {
		blending,
		blendingMode,
		disable,
		greyscale,
		radius,
		rotateB,
		rotateG,
		rotateR,
		scatter,
		shape,
	});
}
