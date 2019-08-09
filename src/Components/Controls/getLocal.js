import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../Actions/index";

function mapStateToProps(state) {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {
    initializeTasks: () => {
      dispatch(action.initializeTasks());
    }
  };
}

class getLocal extends Component {
  render() {
    return (
      <div className="btn_localStorage" onClick={this.props.initializeTasks}>
        <span>LocalStorage</span>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(getLocal);
