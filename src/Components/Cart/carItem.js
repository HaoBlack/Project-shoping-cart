import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    
  };
}

class carItem extends Component {
  showCountCart = (price, quantity) => {
    return price * quantity;
  };
  render() {
    let { item } = this.props;
    // console.log(item);

    return (
      <div>
        <hr />
        <div className="item_cart">
          <div className="item_cart_del" />
          <div className="item_cart_thumb">
            <img
              src={`./image/products/${item.products.sku}_1.jpg`}
              width="100%"
              alt=""
            />
          </div>
          <div className="item_cart_circle">
            <p>{item.products.title}</p>
            <p className="title">
              {item.products.availableSizes} | {item.products.style}
              <br />
              {item.quantity}
            </p>
          </div>
          <div className="item_cart_price">
            <p>$ {this.showCountCart(item.products.price, item.quantity)}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(carItem);
