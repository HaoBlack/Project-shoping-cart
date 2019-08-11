import React, { Component } from "react";
import { connect } from "react-redux";
import Cartitem from "../Components/Cart/carItem";
import * as Messages from "../Constains/Messages";
import ModelCart from "../Components/Cart/modelCart";
import CartResult from "../Components/Cart/cartResult";
import { actDeleteProductInCart } from "../Actions/index";

function mapStateToProps(state) {
  return {
    carts: state.carts
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    actDeleteProductInCart: tasks => {
      dispatch(actDeleteProductInCart(tasks));
    }
  };
}

class CartContainer extends Component {
  showCartItem = carts => {
    var { actDeleteProductInCart } = this.props;
    var result = Messages.MS_CART_EMPTY;
    if (carts.length > 0) {
      result = carts.map((item, index) => {
        return (
          <Cartitem
            key={index}
            item={item}
            index={index}
            actDeleteProductInCart={actDeleteProductInCart}
          />
        );
      });
    }
    return result;
  };

  showTotalAmount = carts => {
    var result = null;
    if (carts.length > 0) {
      result = <CartResult carts={carts} />;
    }
    return result;
  };

  // showQuantityCart = carts => {
  //   var result = null;
  //   if (carts.length > 0) {
  //     result = <HeaderCart carts={carts} />;
  //   }
  //   return result;
  // };
  render() {
    let { carts } = this.props;
    // console.log(carts);

    return (
      <div>
        <ModelCart carts = {carts}>
          {this.showCartItem(carts)}
          {this.showTotalAmount(carts)}
        </ModelCart>
        {/* <CartResult /> */}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);
