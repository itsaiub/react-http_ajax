import * as actionTypes from "../actions/actionTypes";
import { updateObj } from "../utility";

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return updateObj(state, { counter: state.counter + 1 });

    case actionTypes.DECREMENT:
      return updateObj(state, { counter: state.counter - 1 });

    case actionTypes.ADD:
      return updateObj(state, { counter: state.counter + action.value });

    case actionTypes.SUBTRACT:
      return updateObj(state, { counter: state.counter - action.value });

    default:
      return state;
  }
};

export default reducer;
