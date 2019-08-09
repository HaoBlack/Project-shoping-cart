import React, { Component } from "react";
import { connect } from "react-redux";
// import * as action from "../../Actions/index";
import GetLocal from "./getLocal";
import FilterSize from "./filterSize";
import AddProducts from "./addProducts";

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

class Control extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: ""
  //   };
  // }
  // hanldeFilterSize = filterSize =>{
  //   this.props
  // }

  render() {
    let { tasks } = this.props;
    // console.log(this.props.filterSize.bind(this,"XS"));

    return (
      <div className="filters">
        <FilterSize />
        <GetLocal />
        <AddProducts />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(Control);
