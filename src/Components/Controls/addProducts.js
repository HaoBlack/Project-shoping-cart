import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {};
}

class addProducts extends Component {
  render() {
    return (
        <button className="btn_addProduct" type="button" data-toggle="modal" data-target="#modalTask">
          <span>New Product</span>
        </button>
    );
  }
}

export default connect(mapStateToProps)(addProducts);
