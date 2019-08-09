import React, { Component } from "react";
import { connect } from "react-redux";
import { changeCloseToCart } from "../../Actions/index";

function mapStateToProps(state) {
  return {
    CheckOpenCloseCart: state.CheckOpenCloseCart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeCloseToCart: () => {
      dispatch(changeCloseToCart());
    }
  };
}
class modelCard extends Component {
  getlentcart(cart) {
    if (cart === 0) {
      return 0;
    }
  }
  render() {
    let { children } = this.props;
    let { CheckOpenCloseCart } = this.props;

    function openNav() {
      document.getElementById("mySidenav").style.width = "450px";
    }
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
    return (
      <div id="mySidenav" className="sidenav">
        <span className="close-nav" onClick={closeNav}>
          {CheckOpenCloseCart ? "X" : "Close Cart"}
        </span>
        <div className="cart_header">
          <span className="_bag">
            <span className="bag__quantity">{children[0].length}</span>
          </span>
          <span className="header_title" id="nav-icon2" >
            Cart
          </span>
        </div>
        {children}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(modelCard);
