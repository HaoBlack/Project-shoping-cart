import * as types from "../Constains/actionTypes";

const data = JSON.parse(localStorage.getItem("Cart"));
const initialState = data ? data : [];
// const initialState = [
//   {
//     products: {
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
  var { products, quantity } = action;
  var idnex = -1;
  switch (action.type) {
    case types.ADD_TO_CART:
      console.log(action);
      idnex = FindProductInCart(state, products);
      console.log(idnex);
      if (idnex !== -1) {
        state[idnex].quantity += quantity;
      } else {
        state.push({
          products,
          quantity
        });
      }
      return [...state];

    default:
      return [...state];
  }
};

var FindProductInCart = (cart, products) => {
  var idnex = -1;
  if (cart.length > 0) {
    console.log(cart);

    for (var i = 0; i < cart.length; i++) {
      if (cart[i].products.id === products.id) {
        idnex = i;
        break;
      }
    }
  }
  return idnex;
};
export default cart;
