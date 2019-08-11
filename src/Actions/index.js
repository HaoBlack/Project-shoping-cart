import * as types from "../Constains/actionTypes";

export const listAll = () => {
  return {
    type: types.LIST_ALL
  };
};

export const initializeTasks = () => {
  return {
    type: types.INITIALIZE_TASK
  };
};

export const freeShip = () => {
  return {
    type: types.FREE_SHIP
  };
};
export const filterSize = (filterType, filterValue) => {
  return {
    type: types.FILTER_SIZE,
    filterType,
    filterValue
  };
};
export const onAddToCart = (tasks, quantity) => {
  return {
    type: types.ADD_TO_CART,
    tasks,
    quantity
  };
};
export const actDeleteProductInCart = tasks => {
  return {
    type: types.DELETE_PRODUCT_IN_CART,
    tasks
  };
};
export const changeOpenToCart = () => {
  return {
    type: types.OPEN_CART
  };
};
export const changeCloseToCart = () => {
  return {
    type: types.CLOSE_CART
  };
};
