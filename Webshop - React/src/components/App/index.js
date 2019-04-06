import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "../pages/Home/Home"
import ProductPage from "../pages/ProductPage/ProductPage"
import Cart from "../pages/Cart/Cart"
import Checkout from "../pages/Checkout/Checkout"
import OrderView from "../pages/OrderView/OrderView"
import Error from "../pages/Error/Error.js"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/Cart" component={Cart} />
            <Route path="/Checkout" component={Checkout} />
            <Route path="/OrderView" component={OrderView} />
            <Route path="/ProductPage" component={ProductPage} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
