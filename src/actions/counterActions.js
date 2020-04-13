import { INCREMENT, DECREMENT } from './types';

export const incrementCounter = () => ({ type: INCREMENT });
export const decrementCounter = () => ({ type: DECREMENT });
