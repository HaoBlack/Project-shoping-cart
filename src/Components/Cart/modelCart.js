import React, { Component } from "react";
import { connect } from "react-redux";
import { changeCloseToCart } from "../../Actions/index";

function mapStateToProps(state) {
  return {
    CheckOpenCloseCart: state.CheckOpenCloseCart,
    carts: state.carts
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

  render() {
    let { children } = this.props;
    
    let { CheckOpenCloseCart } = this.props;

    function openNav() {
      document.getElementById("mySidenav").style.width = "450px";
    }
    function closeNav() {
      // document.getElementsByClassName("item_cart_del").style.display = "none";
      document.getElementById("mySidenav").style.width = "0";
    }
    return (
      <div id="mySidenav" className="sidenav">
        <span className="close-nav" onClick={closeNav}>
          {CheckOpenCloseCart ? "X" : "Close Cart"}
        </span>
        <div className="cart_header">
          <span className="_bag">
            <span className="bag__quantity"></span>
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
