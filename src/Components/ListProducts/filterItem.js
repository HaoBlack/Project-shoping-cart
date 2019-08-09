import React, { Component } from "react";
import { connect } from "react-redux";
import { changeOpenToCart } from "../../Actions/index";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    changeOpenToCart: () => {
      dispatch(changeOpenToCart());
    }
  };
}

class filterItem extends Component {
  onAddToCart(tasks) {
    this.props.onAddToCart(tasks);
    this.props.changeOpenToCart();
    document.getElementById("mySidenav").style.width = "450px";
  }

  render() {
    // console.log(this.props.task.isFreeShipping);

    let { tasks } = this.props;
    // function openNav() {
    //   document.getElementById("mySidenav").style.width = "450px";
    // }

    let eleisFreeShipping;
    switch (tasks.isFreeShipping) {
      case true:
        eleisFreeShipping = "fs-all";
        break;
      case false:
        eleisFreeShipping = "fs-block";
        break;
      default:
        break;
    }

    return (
      <div className="col-md-3">
        <div className="card_sp">
          <div
            className="card-body text-center "
            onClick={() => this.onAddToCart(tasks)}
          >
            <div className="freeship">
              <i className={`${eleisFreeShipping}`}>Free shipping</i>
            </div>
            <img
              width="100%"
              src={`image/products/${tasks.sku}_1.jpg`}
              alt=""
            />
            <div className="card-title text-center">
              <div className="product_name_All">
                <p className="product_name">{tasks.title}</p>
              </div>
              <div className="line" />
              <h5>
                <small>$</small>
                {tasks.price}
              </h5>
              <h6 className="installments">
                or {tasks.installments} x{tasks.currencyFormat}1.21
              </h6>
            </div>
            <div className="btn_addCart">
              <span>
                <a>Add to cart</a>
                {/* <a onClick={this.openNav()}>Add to cart</a> */}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(filterItem);
