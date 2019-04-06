import React, { Component } from 'react';
import ProductsList from "../../ProductsList";
import Nav from "../../Nav"
import './ProductPage.css' ;


class ProductPage extends Component {

  constructor() {
    super()
    this.state = {
      products: [],
      cart_length: "",
      cartId: localStorage.getItem('cartId'),
      product_link_id: window.location.href.split('=')[1]
    }
    this.addToCart = this.addToCart.bind(this)
  }

  componentDidMount() {
    this.fetchProduct()
    this.updateCart()
  }

  //get guid
  fetchGuid = () => {
    fetch(`/api/Cart_Guid`)
      .then(response => response.json())
      .then(response => {
      this.setState({
        cartId: response
      })
    })
  }

  // fetch all products
  fetchProduct = () => {
    fetch(`/api/products/${this.state.product_link_id}`)
      .then(response => response.json())
      .then(response => {
      this.setState({
        products: response
      })
    })
  }

  //update cart if product is added
  updateCart() {
    fetch(`/api/cart/${this.state.cartId}`, {
      method: "GET",
      mode: "cors",
      headers: {
      "Content-Type": "application/json",
      }
    })
    .then(response => response.status !== 404 && response.json())
    .then(response => {
      console.log(response)
      this.setState({
        cart_length: response.length
      })
    })
  }

  addToCart(event, product) {
    event.preventDefault();
    const data = {
      cart_id : this.state.cartId,
      product_id : product.id
    }

    fetch(`/api/cart/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      this.updateCart()
    })
  }

  render(props) {
    return (
      <div>
        <Nav length={this.state.cart_length} />
        <div className="product-container-productpage">
          <ProductsList products={this.state.products} addToCart={this.addToCart} invisibleItemTotPrice={true} invisibleButtonDelete={true} invisibleQuantity={true}/>
        </div>
      </div>
    );
  }
}

export default ProductPage;
