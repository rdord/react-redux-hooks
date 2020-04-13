import { INCREMENT, DECREMENT } from '../actions/types';

const initialState = { counterValue: 0 };

// @ts-ignore
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counterValue: state.counterValue + 1 };
    case DECREMENT:
      return { ...state, counterValue: state.counterValue - 1 };
    default:
      return state;
  }
};
