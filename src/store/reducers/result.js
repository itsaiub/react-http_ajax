import * as actionTypes from '../actions/actionTypes'
import { updateObj } from "../utility";


const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObj(state, { results: state.results.concat({ date: new Date().toDateString(), value: action.result})})
    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results]; // One way to remove element from array immutably
      // newArray.splice(id, 1);
      const updatedArray = state.results.filter(result => result.id !== action.resultElId)
      return updateObj(state, { results: updatedArray})
    default:
      return state;
  }
};

export default reducer;
