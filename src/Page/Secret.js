import React, { Component } from "react";
import Controls from "../Components/Controls/index";
import ProductsContainers from "../Container/ProductsContainer";
import CartContainer from "../Container/CartContainer";

class Secret extends Component {
  render() {
    return (
        <div className="Container_all">
          <Controls />
          <ProductsContainers />
          <CartContainer />
        </div>
    );
  }
}

export default Secret;
