const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      };
    case "ADD":
      return {
        ...state,
        counter: state.counter + action.value
      };
    case "SUBTRACT":
      return {
        ...state,
        counter: state.counter - action.value
      };
    case 'STORE_RESULT':
      return {
        ...state,
        results: state.results.concat({id: new Date(), date: new Date().toDateString() ,value: state.counter})
      }
    case 'DELETE_RESULT':
      // const id = 2;
      // const newArray = [...state.results]; // One way to remove element from array immutably
      // newArray.splice(id, 1);
      const updatedArray = state.results.filter(result => result.id !== action.resultElId)
      return { ...state, 
        results: updatedArray 
      };

    default:
      return state;
  }
};

export default reducer;
