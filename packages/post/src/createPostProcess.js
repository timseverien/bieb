/* globals document */
const createRegl = require('regl');

const attributePositionData = [
	[-1, -1],
	[1, -1],
	[1, 1],

	[-1, -1],
	[1, 1],
	[-1, 1],
];

const attributeUvData = [
	[0, 0],
	[1, 0],
	[1, 1],

	[0, 0],
	[1, 1],
	[0, 1],
];

const shaderCopyFragment = `
	precision highp float;

	uniform sampler2D uDiffuse;
	varying vec2 vUv;

	void main() {
		gl_FragColor = texture2D(uDiffuse, vUv);
	}
`;

const shaderCopyVertex = `
	attribute vec2 position;
	attribute vec2 uv;

	varying vec2 vUv;

	void main() {
		vUv = uv;

		gl_Position = vec4(position, 0, 1);
	}
`;

export default function createPostProcess({
	canvas = document.createElement('canvas'),
	context = canvas.getContext('webgl'),
} = {}) {
	const regl = createRegl(context || canvas);

	const attributePositionBuffer = regl.buffer(attributePositionData);
	const attributeUvBuffer = regl.buffer(attributeUvData);

	const renderBufferOptions = {
		height: canvas.height,
		width: canvas.width,
	};

	const renderBuffers = [
		regl.renderbuffer(renderBufferOptions),
		regl.renderbuffer(renderBufferOptions),
	];

	const reglOptions = {
		vert: shaderCopyVertex,

		attributes: {
			position: attributePositionBuffer,
			uv: attributeUvBuffer,
		},

		count: 6,
	};

	// const texture =
	// TODO: create texture

	const copyToScreen = regl({
		...reglOptions,
		frag: shaderCopyFragment,

		uniforms: {
			uDiffuse: { value: null },
		},
	});

	let isDestroyed = false;

	return {
		canvas,
		context,

		commands: [],
		passes: [],

		add(pass) {
			this.passes.push(pass);

			this.commands.push(regl({
				...reglOptions,
				frag: pass.shader,
				framebuffer: this.commands.length % this.renderbuffer.length,
			}));
		},

		destroy() {
			isDestroyed = true;

			for (const rb of renderBuffers) {
				rb.destroy();
			}
		},

		render(image) {
			if (isDestroyed) {
				throw new Error('This post process instance is destroyed.');
			}

			for (const command of this.commands) {
				command();
			}

			copyToScreen();

			return canvas;

			// TODO: convert image to texture
			// TODO: render image + render passes
			// TODO: finally render to canvas
		},
	};
}
