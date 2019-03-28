import React, { Component } from 'react';
import './ProductsContainer.css';
import ProductsList from "../ProductsList";

class ProductsContainer extends Component {

  constructor() {
    super()
    this.state = {
      products: []
    }
  }

  componentDidMount(){
    this.fetchProduct();
  }

  fetchProduct = () => {
    fetch(`/api/products`)
      .then(response => response.json())
      .then(response => {
        console.log(response)
      this.setState({
        products: response
      })
    })
  }

  render(props) {

    return (
      <div className="product-container">
        <ProductsList products={this.state.products} />
      </div>
    );
  }
}

export default ProductsContainer;
