const initialState = true;

const checkOpenCloseCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_CART":
      return true;

    case "CLOSE_CART":
      return false;

    default:
      return state;
  }
};
export default checkOpenCloseCartReducer;
