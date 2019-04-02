import React from 'react';
// import styled from 'styled-components'
import './ProductsList.css';
import ProductItem from "../ProductItem";

const ProductsList = (props) => {
  return (
    <div className="product-list">
    {props.products.map((item, key) => <ProductItem key={key} addToCart={props.addToCart} DeleteFromCart={props.DeleteFromCart} invisibleDescription={props.invisibleDescription} invisibleQuantity={props.invisibleQuantity} invisibleButtonAdd={props.invisibleButtonAdd} invisibleButtonDelete={props.invisibleButtonDelete} item={item} />)}
    </div>
  )
}

export default ProductsList;
