import React, { Component } from "react";
import Controls from "./Components/Controls";
import ProductsContainers from "../src/Container/ProductsContainer";
import CartContainer from "../src/Container/CartContainer";

class App extends Component {
  render() {
    return (
      <div>
        <div className="main">
          <Controls />
          <ProductsContainers />
          <CartContainer />

        </div>
      </div>
    );
  }
}

export default App;
