import * as actionTypes from "../actions/actionTypes";
import { updateObj } from "../utility";
const initialState = {
  results: []
};

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(
    result => result.id !== action.resultElId
  );
  return updateObj(state, { results: updatedArray });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObj(state, {
        results: state.results.concat({
          id: new Date(),
          date: new Date().toDateString(),
          value: action.result
        })
      });
    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);
    default:
      return state;
  }
};

export default reducer;
