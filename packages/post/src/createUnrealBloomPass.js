import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { Vector2 } from 'three/src/math/Vector2';

export default function createUnrealBloomPass({
	strength = 1,
	radius = 0,
	threshold = 0,
} = {}) {
	return (width, height) => new UnrealBloomPass(new Vector2(width, height), strength, radius, threshold);
}
