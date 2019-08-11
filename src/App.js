import React, { Component } from "react";
import "./App.css";

// import Controls from "./Components/Controls";
// import ProductsContainers from "../src/Container/ProductsContainer";
// import CartContainer from "../src/Container/CartContainer";
import { useAuth0 } from "./reatct-auth0-wapper";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { privateRouters, publicRoutes } from "./routes";

import Navbar from "../src/Components/ListProducts/Navbar";

const RenderRoutes = routes => {
  return routes.map((route, index) => {
    return (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    );
  });
};

const App = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="main">
      <BrowserRouter>
        <Navbar />
        <Switch>
          {isAuthenticated && <>{RenderRoutes(privateRouters)}</>}
          {RenderRoutes(publicRoutes)}
        </Switch>
      </BrowserRouter>

      {/* <Controls />
    <ProductsContainers />
    <CartContainer /> */}
    </div>
  );
};

export default App;
