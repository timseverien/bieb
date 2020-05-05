import IVector from '../../../shared/types/vector';
import vectorMax from './max';
import vectorMin from './min';

export default function clamp(v: IVector, min: IVector, max: IVector): IVector {
	return vectorMax(vectorMin(v, max), min);
};
