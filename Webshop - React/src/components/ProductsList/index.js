import React from 'react';
import './ProductsList.css';
import ProductItem from "../ProductItem";

const ProductsList = (props) => (
  <div className="product-list">
    {props.products.map((item, key) => <ProductItem key={key} item={item} />) }
  </div>
)

export default ProductsList;
