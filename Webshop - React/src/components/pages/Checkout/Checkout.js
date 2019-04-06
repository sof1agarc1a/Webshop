import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import ProductsList from "../../ProductsList";
import Nav from "../../Nav"
import './Checkout.css' ;

class Checkout extends Component {

  constructor() {
    super()
    this.state = {
      cartId: localStorage.getItem('cartId'),
      cart: [],
      cart_length: "",
      adress_customer: '',
      name_customer: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
        cart_length: cartResponse.length
      })
    })
  }

  handleChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    const data = {
      name_customer: this.state.name_customer,
      adress_customer: this.state.adress_customer,
      ordered_cart: this.state.cartId
    }

    fetch(`/api/Order_Customer/`, {
      method: "POST",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(data)
    });
  }



  render(props) {
    let sum = 0;
    return (
      <div>
        <Nav length={this.state.cart_length} />
        <div className="product-container-checkout">
          <div className="order-form-container">
            <form onSubmit={this.handleSubmit}>
              <div className="form-wrapper">
                <label htmlFor="name_customer">Fullname</label>
                <input id="name_customer" type="text" name="name_customer" value={this.state.name_customer} onChange={this.handleChange} required />
                <label htmlFor="adress_customer">Adress</label>
                <input id="adress_customer" type="text" name="adress_customer" value={this.state.adress_customer} onChange={this.handleChange} required />
                <label htmlFor="city">City</label>
                <input id="city" type="text" required />
                <label htmlFor="email">Email</label>
                <input id="email" type="text" required />
                <input type="hidden" name="cartId" value={this.state.cartId} />
                <div>
                  {this.state.cart.map(item => {
                    {sum += item.total_price}
                    return
                  })}
                  <p className="total-sum-order"> Total  {sum} kr</p>
                </div>
                <NavLink className="order-button" to={'/OrderView'} onClick={this.handleSubmit} type="submit" value="Submit">Confirm Order</NavLink>
              </div>
            </form>
            <ProductsList products={this.state.cart} DeleteFromCart={this.DeleteFromCart} addToCart={this.addToCart} Artist={true} wrapper2css={true} ProductTitle={true} invisiblePrice={true} productcss={true} product2css={true} invisibleButtonDelete={true} invisibleButtonAdd={true} invisibleDescription={true}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Checkout;
