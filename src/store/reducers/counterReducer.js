import { INCREMENT, DECREMENT } from '../types';

const initialState = { counterValue: 0 };

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counterValue: state.counterValue + parseInt(action.payload) };
    case DECREMENT:
      return { ...state, counterValue: state.counterValue - 1 };
    default:
      return state;
  }
};
