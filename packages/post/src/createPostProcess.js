import { CanvasTexture } from 'three/src/textures/CanvasTexture';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { TexturePass } from 'three/examples/jsm/postprocessing/TexturePass';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer';

export default function createPostProcess({ sourceCanvas } = {}) {
	const renderer = new WebGLRenderer();
	const texture = new CanvasTexture(sourceCanvas);

	const composer = new EffectComposer(renderer);
	composer.addPass(new TexturePass(texture));

	renderer.setSize(sourceCanvas.width, sourceCanvas.height);
	composer.setSize(sourceCanvas.width, sourceCanvas.height);

	return {
		canvas: renderer.domElement,

		add(pass) {
			const { height, width } = sourceCanvas;
			const threePass = pass({
				height,
				width,
			});

			composer.addPass(threePass);

			return threePass;
		},

		render() {
			texture.needsUpdate = true;

			composer.render();
		},
	};
}
