import React from 'react';
import './OrderInfo.css' ;

const OrderInfo = (props) => (
  <div className="order-info-container">
    <p>Order number: #{props.item.id}</p>
    <p>Delivery adress: {props.item.adress_customer}</p>
    <p>Fullname: {props.item.name_customer}</p>
  </div>
)

export default OrderInfo;
