import * as Types from "../Constains/actionTypes";

const data = JSON.parse(localStorage.getItem("Cart"));
const initialState = data ? data : [];
// const initialState = [
//   {
//     tasks: {
//       id: 12,
//       sku: 12064273040195392,
//       title: "Cat Tee Black T-Shirt",
//       description: "4 MSL",
//       availableSizes: ["S", "XS"],
//       style: "Black with custom print",
//       price: 10.9,
//       installments: 9,
//       currencyId: "USD",
//       currencyFormat: "$",
//       isFreeShipping: true
//     },
//     quantity: 5
//   }
// ];

const cart = (state = initialState, action) => {
  var { tasks, quantity } = action;
  var index = -1;
  switch (action.type) {
    case Types.ADD_TO_CART:
      index = FindProductInCart(state, tasks);
      // console.log(index);
      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state.push({
          tasks,
          quantity
        });
      }
      localStorage.setItem("Cart", JSON.stringify(state));
      return [...state];

    case Types.DELETE_PRODUCT_IN_CART:
      index = FindProductInCart(state, tasks);
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem("Cart", JSON.stringify(state));
      return [...state];

    default:
      return [...state];
  }
};

var FindProductInCart = (cart, tasks) => {
  var index = -1;
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].tasks.id === tasks.id) {
        index = i;
        break;
      }
    }
  }
  return index;
};
export default cart;
