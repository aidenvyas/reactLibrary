import { createStore } from "redux";
import data from "./data.json";
const initialState = {
  books: data,
  searchValue: "",
  results: []
};

const reducer = (state = initialState, action) => {
  console.log("reducer is running", action);
  switch (action.type) {
    case "INPUTCHANGE":
      return { ...state, searchValue: action.value };
    case "SUBMIT":
    
    const {value} = action;
    const results = state.books.filter((val) => val.title===value);
    console.log("results of search ",results)
    return {...state, value, results};
     
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
