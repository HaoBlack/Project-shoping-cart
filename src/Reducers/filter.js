import * as types from "../Constains/actionTypes";
// import listOfTasks from "../Components/Getdata/getData";

// const JsonTask = JSON.parse(localStorage.getItem("task"));
let initialState = {
  filterType: "",
  filterValue: ""
};

let reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FILTER_SIZE:
      state = {
        filterType: action.filterType,
        filterValue: action.filterValue
      };
      return state;

    default:
      break;
  }
  return state;
};
export default reducer;
