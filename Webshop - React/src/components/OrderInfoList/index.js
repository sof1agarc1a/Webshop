import React from 'react';
import OrderInfo from "../OrderInfo";

const OrderInfoList = (props) => {
  return (
    <div>
    {props.orderinfo.map((item, key) => <OrderInfo key={key} item={item} />)}
    </div>
  )
}

export default OrderInfoList;
