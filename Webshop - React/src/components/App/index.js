import React, { Component } from 'react';
import './App.css';

import ProductsContainer from "../ProductsContainer"
import Nav from "../Nav"


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <ProductsContainer />
      </div>
    );
  }
}

export default App;
