import types from './types';

export default {
  increaseCount: payload => ({
    type: types.INCREASE_COUNTER,
    payload,
  }),
  decreaseCount: payload => ({
    type: types.DECREASE_COUNTER,
    payload,
  }),
  setCount: payload => ({
    type: types.SET_COUNTER,
    payload,
  }),
};
