import * as types from "../Constains/actionTypes";
import listOfTasks from "../Components/Getdata/getData";

const JsonTask = JSON.parse(localStorage.getItem("task"));
const initialState = JsonTask ? JsonTask : [];

let reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    // break;

    case types.INITIALIZE_TASK:
      localStorage.setItem("task", JSON.stringify(listOfTasks.list));
      window.location.reload();
      break;

    default:
      break;
  }
  return state;
};
export default reducer;
