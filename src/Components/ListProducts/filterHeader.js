import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

class filterHeader extends Component {
  render() {
    let { tasks } = this.props;

    return (
      <div className="container-header">
        <div className="row">
          <div className="col-md-6">
            <p>{tasks.length} Product(s) found.</p>
          </div>
          <div className="col-md-6 ml-auto text-right">
            <div className="btn-select">
              <span className="Order-by">Order by</span>
              <select>
                <option>Select</option>
                <option value>Lowest to highest</option>
                <option value>Highest to lowest</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(filterHeader);
