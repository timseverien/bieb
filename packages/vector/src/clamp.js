import vectorMax from './max';
import vectorMin from './min';

export default function clamp(v, min, max) {
	return vectorMax(vectorMin(v, max), min);
}
