import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../Actions/index";

function mapStateToProps(state) {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {
    filterSize: (filterType, filterValue) => {
      dispatch(action.filterSize(filterType, filterValue));
    }
  };
}
class filterSize extends Component {
  render() {
    return (
      <div>
        <h4 className="title">Size:</h4>
        <div className="filters-available-size">
          <label>
            <input
              type="checkbox"
              value="XS"
              onClick={this.props.filterSize.bind(this, "availableSizes", "XS")}
            />
            <span className="checkmark">XS</span>
          </label>
        </div>
        <div className="filters-available-size">
          <label>
            <input
              type="checkbox"
              value="S"
              onClick={this.props.filterSize.bind(this, "availableSizes", "S")}
            />
            <span className="checkmark">S</span>
          </label>
        </div>
        <div className="filters-available-size">
          <label>
            <input
              type="checkbox"
              value="M"
              onClick={this.props.filterSize.bind(this, "availableSizes", "M")}
            />
            <span className="checkmark">M</span>
          </label>
        </div>
        <div className="filters-available-size">
          <label>
            <input
              type="checkbox"
              value="ML"
              onClick={this.props.filterSize.bind(this, "availableSizes", "ML")}
            />
            <span className="checkmark">ML</span>
          </label>
        </div>
        <div className="filters-available-size">
          <label>
            <input
              type="checkbox"
              value="L"
              onClick={this.props.filterSize.bind(this, "availableSizes", "L")}
            />
            <span className="checkmark">L</span>
          </label>
        </div>
        <div className="filters-available-size">
          <label>
            <input
              type="checkbox"
              value="XL"
              onClick={this.props.filterSize.bind(this, "availableSizes", "XL")}
            />
            <span className="checkmark">XL</span>
          </label>
        </div>
        <div className="filters-available-size">
          <label>
            <input
              type="checkbox"
              value="XXL"
              onClick={this.props.filterSize.bind(
                this,
                "availableSizes",
                "XXL"
              )}
            />
            <span className="checkmark">XXL</span>
          </label>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(filterSize);
