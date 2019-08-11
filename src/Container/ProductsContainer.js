import React, { Component } from "react";
import { connect } from "react-redux";
import ListProduct from "../Components/ListProducts/index";
import FilterItem from "../Components/ListProducts/filterItem";
import { onAddToCart } from "../Actions/index";

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    filter: state.filter
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: tasks => {
      dispatch(onAddToCart(tasks, 1));
    }
  };
};
class ProductsContainer extends Component {
  showProductsItem(tasks) {
    var result = null;
    var { onAddToCart } = this.props;
    if (tasks.length > 0) {
      result = tasks.map((tasks, index) => {
        return (
          <FilterItem
            key={index}
            tasks={tasks}
            index={index}
            onAddToCart={onAddToCart}
          />
        );
      });
    }
    return result;
  }
  render() {
    let { tasks } = this.props;
    // console.log(this.props.filter.filterType);
    let filterTasks = [];
    // filterType: ""
    // filterValue

    switch (this.props.filter.filterType) {
      case "availableSizes":
        for (let task of tasks) {
          // console.log(task);
          for (let index of task.availableSizes) {
            // console.log(this.props.filter.filterValue);
            if (index === this.props.filter.filterValue) {
              filterTasks = [...filterTasks, task];
              // console.log(index.availableSizes);
            }
          }
        }
        break;
      case "":
        filterTasks = tasks;
        break;

      default:
        break;
    }

    return <ListProduct>{this.showProductsItem(filterTasks)}</ListProduct>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);
