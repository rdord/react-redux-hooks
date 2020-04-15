import { INCREMENT, DECREMENT } from '../types';

export const incrementCounter = (number = 1) => ({ type: INCREMENT, payload: number });
export const decrementCounter = () => ({ type: DECREMENT });
