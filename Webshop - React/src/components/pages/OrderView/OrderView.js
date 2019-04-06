import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import ProductsList from "../../ProductsList";
import OrderInfoList from "../../OrderInfoList";
import Nav from "../../Nav"
import './OrderView.css';

class OrderView extends Component {
  constructor() {
    super()
    this.state = {
      cartId: localStorage.getItem('cartId'),
      cart: [],
      adress_customer: '',
      name_customer: '',
      orderinfo: [],
    }
    this.removeId = this.removeId.bind(this)
  }

  componentDidMount(){
    this.updateCart()
    this.fetchOrder()
    this.removeId()
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
        cart: cartResponse.length > 0 ? cartResponse : []
      })
    })
  }

  fetchOrder = () => {
    fetch(`/api/Order_Customer/${this.state.cartId}`, {
      method: "GET",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(response => {
      this.setState({
        orderinfo: response.length > 0 ? response:[]
      })
    })
  }

  removeId() {
    this.setState({
      cartId: localStorage.removeItem('cartId')
    })
  }

  render(props) {
    let sum = 0;
    return (
      <div>
        <Nav />
        <div className="product-container-checkout">
          <div className="orderinfo-container">
            <OrderInfoList orderinfo={this.state.orderinfo} />
            {this.state.cart.map(item => {
              {sum += item.total_price}
              return
              console.log(sum)
            })}
            <pre className="total-sum sum-left"> Total: {sum} kr</pre>
            <ProductsList products={this.state.cart} DeleteFromCart={this.DeleteFromCart} addToCart={this.addToCart} Artist={true} ProductTitle={true} invisiblePrice={true} wrappercss={true} productcss={true} invisibleButtonDelete={true} invisibleButtonAdd={true} invisibleDescription={true} />
          </div>
          <NavLink className="shopping-button" to={'/'}> Continue Shopping </NavLink>
        </div>
      </div>
    )
  }
}

export default OrderView;
