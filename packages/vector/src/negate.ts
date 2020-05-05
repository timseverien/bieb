import IVector from '../../../shared/types/vector';
import multiplyScalar from './multiplyScalar';

export default function negate(v: IVector): IVector {
	return multiplyScalar(v, -1);
};
