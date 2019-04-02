import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';


import Home from "../pages/Home/Home"
// import '../pages/Home/Home.css' ;

import Cart from "../pages/Cart/Cart"
import Shop from "../pages/Shop/Shop"
import Error from "../pages/Error/Error.js"

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/Cart" component={Cart} />
            <Route path="/Shop" component={Shop} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
