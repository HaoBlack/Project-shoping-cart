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
export const onAddToCart = (products, quantity) => {
  return {
    type: types.ADD_TO_CART,
    products,
    quantity
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
