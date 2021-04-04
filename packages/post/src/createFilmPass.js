import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass';

export default function createFilmPass({
	noiseIntensity = 0.5,
	scanlinesIntensity = 0.5,
	scanlinesCount = 256,
	grayscale = false,
} = {}) {
	return () => new FilmPass(noiseIntensity, scanlinesIntensity, scanlinesCount, grayscale);
}
