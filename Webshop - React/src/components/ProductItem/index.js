import React from 'react';
import './ProductItem.css';

const ProductItem = (props) => (
  <div className="product-item">
    <img className="vinyl-image" src={require(`../../Images/${props.item.img}`)} alt={props.item.img} />
    <div className="product-description">
      <p>{props.item.product_title}</p>
      <p>{props.item.product_artist}</p>
      {/**<p>{props.item.product_release}</p>**/}
      {/**<p>{props.item.description}</p>**/}
      <div>
        <button> <img className="bag-img" src={'http://www.myiconfinder.com/uploads/iconsets/256-256-945bfa5ecf0e2466bcecc367a8ba84e7.png'} alt={'bag'} /> + </button>
        <p>{props.item.price} kr</p>
      </div>
    </div>
  </div>
)

export default ProductItem;
