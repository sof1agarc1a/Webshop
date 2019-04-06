import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import ProductsList from "../../ProductsList";
import Nav from "../../Nav"
import './Cart.css' ;


class Cart extends Component {
  constructor() {
    super()
    this.state = {
      cartId: localStorage.getItem('cartId'),
      cart: [],
      id: "",
    }
    this.DeleteFromCart = this.DeleteFromCart.bind(this)
    this.addToCart = this.addToCart.bind(this)
  }

  componentDidMount(){
    this.updateCart()
  }

  updateCart() {
    fetch(`/api/cart/${this.state.cartId}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(cartResponse => cartResponse.json())
    .then(cartResponse => {
      this.setState({
        cart: cartResponse.length > 0 ? cartResponse : [],
        cart_length: cartResponse.length,
      })
    })
  }


  addToCart(event, product) {
    event.preventDefault();
    const data = {
      cart_id : this.state.cartId,
      product_id : product.product_id,
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


  DeleteFromCart(event, product) {
    event.preventDefault();

    const data = {
      id : product.id
    }

    fetch(`/api/cart/${data.id}`, {
      method: "DELETE",
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
    let sum = 0;
    return (
      <div>
        <Nav length={this.state.cart_length} />
        <div className="product-container">
          <NavLink className="checkout-button" to="/Checkout"> Continue to checkout </NavLink>
          {this.state.cart.map(item => {
            {sum += item.total_price}
            return
            console.log(sum)
          })}
          <pre className="total-sum"> Total  {sum} kr</pre>
          <ProductsList products={this.state.cart} DeleteFromCart={this.DeleteFromCart} addToCart={this.addToCart} Artist={true} ProductTitle={true} invisiblePrice={true} wrappercss={true} productcss={true} invisibleDescription={true} />
        </div>
      </div>
    )
  }
}

export default Cart;
