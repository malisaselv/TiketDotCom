import {types} from '../actions';

const initialState = {
  counter: 0,
  test: '',
};

const countReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case types.INCREASE_COUNTER:
      return {
        ...state,
        counter: state.counter + action.payload.value,
        test: 10,
      };
    case types.DECREASE_COUNTER:
      return {...state, counter: state.counter - action.payload};
    case types.SET_COUNTER:
      return {counter: action.payload};
    default:
      return state;
  }
};

export default countReducer;
