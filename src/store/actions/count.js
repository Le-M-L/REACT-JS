import { INCREASE, DECREASE } from '../constant/count';
export const increase = (data) => ({ type: INCREASE, data });
export const decrease = (data) => ({ type: DECREASE, data });
