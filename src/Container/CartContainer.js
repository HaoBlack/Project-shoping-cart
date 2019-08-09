import React, { Component } from "react";
import { connect } from "react-redux";
import Cartitem from "../Components/Cart/carItem";
import * as Messages from "../Constains/Messages";
import ModelCard from "../Components/Cart/modelCard";
import CartResult from "../Components/Cart/cartResult";

function mapStateToProps(state) {
  return {
    carts: state.carts
  };
}

class CartContainer extends Component {
  showCartItem = carts => {
    var result = Messages.MS_CART_EMPTY;
    if (carts.length > 0) {
      result = carts.map((item, index) => {
        return <Cartitem key={index} item={item} index={index} />;
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

  render() {
    let { carts } = this.props;
    // console.log(carts);

    return (
      <div>
        <ModelCard>
          {this.showCartItem(carts)}
          {this.showTotalAmount(carts)}
        </ModelCard>
        {/* <CartResult /> */}
      </div>
    );
  }
}

export default connect(mapStateToProps)(CartContainer);
