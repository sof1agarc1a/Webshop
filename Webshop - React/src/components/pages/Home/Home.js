import React, { Component } from 'react';
import ProductsList from "../../ProductsList";
import Nav from "../../Nav"
import './Home.css' ;


class Home extends Component {

  constructor() {
    super()
    this.state = {
      products: [],
      cartId: "",
      cart_length: "",
      isLoading: true
    }
    this.addToCart = this.addToCart.bind(this)
  }

  componentWillMount() {
    localStorage.getItem('cartId') && this.setState({
      cartId: localStorage.getItem('cartId'),
      isLoading: false
    })
  }

  componentDidMount() {
    this.fetchProduct()
    this.updateCart()

    //use guid as your unique id with localStorage
    if(!localStorage.getItem('cartId')) {
      this.fetchGuid()
    }
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

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('cartId', nextState.cartId)
  }

  // fetch all products
  fetchProduct = () => {
    fetch(`/api/products`)
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

    console.log(data);

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
      <div className="product-container">
        <ProductsList products={this.state.products} addToCart={this.addToCart} invisibleButtonDelete={true} invisibleQuantity={true} invisibleDescription={true}/>
      </div>
    </div>
    );
  }
}

export default Home;
