import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {};
}

class cartResult extends Component {
  showTotalAmount = carts => {
    var total = 0;
    if (carts.length > 0) {
      for (var i = 0; i < carts.length; i++) {
        total += carts[i].tasks.price * carts[i].quantity;
      }
    }
    return total;
  };
  render() {
    let { carts } = this.props;
    // console.log(carts);

    return (
      <div className="sum_cart">
        <div className="box_sum_cart">
          <div className="_sub">SUBTOTAL</div>
          <div className="_price">
            <p>${this.showTotalAmount(carts)}</p>
            <small>OR UP TO 9 x $ 7.76</small>
          </div>
        </div>
        <div className="buy_btn">Checkout</div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(cartResult);
