import React, { Component } from 'react';
import ProductsList from "../../ProductsList";
import Nav from "../../Nav"
import './Home.css' ;

class Home extends Component {
  constructor() {
    super()
    this.state = {
      products: [],
      cart_length: "",
      isLoading: true,
      cartId: ""
    }
    this.addToCart = this.addToCart.bind(this)
  }

  componentWillMount() {
    localStorage.getItem('cartId') && this.setState({
      cartId: localStorage.getItem('cartId'),
      isLoading: false
    })
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('cartId', nextState.cartId)
  }

  componentDidMount() {
    if(!localStorage.getItem('cartId')) {
      this.fetchGuid()
    }
    this.fetchProduct()
    setTimeout(() => this.updateCart(), 400) //fetch unique cart after getting a guid to avoid errors
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
        <div className="product-container-home">
          <ProductsList products={this.state.products} addToCart={this.addToCart} invisibleItemTotPrice={true} invisibleButtonDelete={true} invisibleQuantity={true} invisibleDescription={true}/>
        </div>
      </div>
    )
  }
}

export default Home;
