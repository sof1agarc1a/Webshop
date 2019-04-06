import React from 'react';
import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import './ProductItem.css';

const ButtonAdd = styled.button`
  padding: 8px;
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
  ${props => props.invisible && `
    display: none;
  `}
`

const ProductQuantity = styled.p`
  background-color: rgba(0,0,0,.3);
  ${props => props.invisible && `
    display: none;
  `}
`

const Price = styled.p`
  padding: 8px;
  ${props => props.invisible && `
    display: none;
  `}
`

const ItemTotPrice = styled.p`
  margin-left: 40px;
  ${props => props.invisible && `
    display: none;
  `}
`

const DivProductItem = styled.div`
  ${props => props.productcss && `
    width: 100%;
    display: flex;
    padding-top: 10px;
  `}
`

const ImgVinylImage = styled.img`
  ${props => props.productcss && `
    width: 230px;
    height: 230px;
    margin-bottom: -6px;
  `}

  ${props => props.product2css && `
    width: 160px;
    height: 160px;
  `}
`

const DivProductDescription = styled.div`
  ${props => props.productcss && `
    padding: 20px 30px 20px;
    margin-top: 0px;
    width: 75.9%;
    display: flex;
    justify-content: center;
    align-items: center;
  `}

  ${props => props.product2css && `
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`

const ProductTitle = styled.p`
  ${props => props.textcss && `
    font-size: 30px;
  `}
`

const Artist = styled.p`
  ${props => props.textcss && `
    color: rgba(255,255,255,.7);
  `}
`

const ProductItem = (props) => (
  <DivProductItem productcss={props.productcss} className="product-item">

    <NavLink to={`/ProductPage?id=${props.item.id}`}>
      <ImgVinylImage product2css={props.product2css} productcss={props.productcss} className="vinyl-image" src={require(`../../Images/${props.item.img}`)} alt={props.item.img} />
    </NavLink>

    <DivProductDescription product2css={props.product2css} productcss={props.productcss} className="product-description">
      <ProductTitle textcss={props.ProductTitle}>{props.item.product_title}</ProductTitle>
      <Artist textcss={props.Artist}>{props.item.product_artist}</Artist>
      <Description invisible={props.invisibleDescription}>{props.item.description}</Description>

      <div>
        <ButtonAdd invisible={props.invisibleButtonAdd} onClick={(e) => props.addToCart(e, props.item)} className="add-product"> <img className="bag-img" src={'http://www.myiconfinder.com/uploads/iconsets/256-256-945bfa5ecf0e2466bcecc367a8ba84e7.png'} alt={'bag'} /> + </ButtonAdd>
        <ProductQuantity invisible={props.invisibleQuantity}>{props.item.total_quantity}</ProductQuantity>
        <ButtonDelete invisible={props.invisibleButtonDelete} onClick={(e) => props.DeleteFromCart(e, props.item)} className="add-product"> <img className="bag-img" src={'http://www.myiconfinder.com/uploads/iconsets/256-256-945bfa5ecf0e2466bcecc367a8ba84e7.png'} alt={'bag'} /> - </ButtonDelete>
        <Price invisible={props.invisiblePrice}>{props.item.price} kr</Price>
        <ItemTotPrice invisible={props.invisibleItemTotPrice}>{props.item.total_price} kr</ItemTotPrice>
      </div>
    </DivProductDescription>
  </DivProductItem>
)

export default ProductItem;
