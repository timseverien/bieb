import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';

const uniformsDefault = {
	tDiffuse: { value: null },
};

const vertexShaderDefault = `
	varying vec2 vUv;

	void main() {
		vUv = uv;
		gl_Position = vec4(position, 1);
	}
`;

export default function createShaderPass({
	defines = {},
	uniforms = {},
	fragmentShader,
	vertexShader = vertexShaderDefault,
} = {}) {
	return () => new ShaderPass({
		defines,
		fragmentShader,
		uniforms: {
			...uniformsDefault,
			...uniforms,
		},
		vertexShader,
	});
}
