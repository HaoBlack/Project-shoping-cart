import { combineReducers } from "redux";
import tasks from "./tasks";
import carts from './carts';
import filter from './filter';
import CheckOpenCloseCart from './isOpenCloseCart';

const myReducer = combineReducers({
  tasks,
  carts,
  filter,
  CheckOpenCloseCart
});

export default myReducer;
