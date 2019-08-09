import React, { Component } from "react";
import { connect } from "react-redux";
import FilterHeader from "./filterHeader";
// import FilterItem from "./filterItem";

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

class index extends Component {
  render() {
    // console.log(this.props.tasks);
    // let { tasks } = this.props;

    // let eleLabel = tasks.map((task, index) => {
    //   return (
    //     <FilterItem
    //       key={index}
    //       index={index}
    //       task={task}
    //     />
    //   );
    // });
    return (
      <div className="container">
        <FilterHeader />
        <div className="row">{this.props.children}</div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(index);
