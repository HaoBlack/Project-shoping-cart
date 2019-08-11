import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    carts: state.carts
  };
}

class carItem extends Component {
  
  showCountCart = (price, quantity) => {
    return price * quantity;
  };
  onDelete(tasks) {
    var { actDeleteProductInCart } = this.props;
    actDeleteProductInCart(tasks);
  }
  render() {
    let { item } = this.props;

    return (
      <div>
        <hr />
        <div className="item_cart">
          <div
            className="item_cart_del"
            onClick={() => this.onDelete(item.tasks)}
          />
          <div className="item_cart_thumb">
            <img
              src={`./image/products/${item.tasks.sku}_1.jpg`}
              width="100%"
              alt={item.tasks.title}
            />
          </div>
          <div className="item_cart_circle">
            <p>{item.tasks.title}</p>
            <p className="title">
              {item.tasks.availableSizes} | {item.tasks.style}
              <br />
              {item.quantity}
            </p>
          </div>
          <div className="item_cart_price">
            <p>$ {this.showCountCart(item.tasks.price, item.quantity)}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(carItem);
