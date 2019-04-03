import React from 'react';
import styled from 'styled-components'
import './ProductItem.css';

const ButtonAdd = styled.button`
  padding: 8px;
  margin: 0 5px;
  ${props => props.invisible && `
    display: none;
  `}
`

const ButtonDelete = styled.button`
  padding: 8px;
  ${props => props.invisible && `
    display: none;
  `}
`

const Description = styled.p`
  /* width: 391px; */
  display: none;
  ${props => props.invisible && `
    display: none;
  `}
`

const ProductQuantity = styled.p`
  ${props => props.invisible && `
    display: none;
  `}
`

const Price = styled.p`
  padding: 16px;
  ${props => props.invisible && `
    display: none;
  `}
`

const ProductItem = (props) => (
  <div className="product-item">
    <img className="vinyl-image" src={require(`../../Images/${props.item.img}`)} alt={props.item.img} />
    <div className="product-description">
      <p>{props.item.product_title}</p>
      <p>{props.item.product_artist}</p>
      <Description invisible={props.invisibleDescription}>{props.item.description}</Description>
      <ProductQuantity invisible={props.invisibleQuantity}>{"x" + props.item.total_quantity}</ProductQuantity>

      <div>
        <ButtonAdd invisible={props.invisibleButtonAdd} onClick={(e) => props.addToCart(e, props.item)} className="add-product"> <img className="bag-img" src={'http://www.myiconfinder.com/uploads/iconsets/256-256-945bfa5ecf0e2466bcecc367a8ba84e7.png'} alt={'bag'} /> + </ButtonAdd>
        <ButtonDelete invisible={props.invisibleButtonDelete} onClick={(e) => props.DeleteFromCart(e, props.item)} className="add-product"> <img className="bag-img" src={'http://www.myiconfinder.com/uploads/iconsets/256-256-945bfa5ecf0e2466bcecc367a8ba84e7.png'} alt={'bag'} /> - </ButtonDelete>

        <Price>{props.item.price} kr</Price>
      </div>
    </div>
  </div>
)

export default ProductItem;
