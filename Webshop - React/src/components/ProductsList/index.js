import React from 'react';
import styled from 'styled-components'
import './ProductsList.css';
import ProductItem from "../ProductItem";


const DivProductList = styled.div`
  ${props => props.wrappercss && `
    flex-direction: column;
    width: 1200px;
    margin-top: 20px;
    margin-bottom: 30px;
  `}

  ${props => props.wrapper2css && `
    flex-direction: column;
    width: 940px;
    margin: 0;
    margin-top: 20px;
    margin-bottom: 30px;
  `}
`

const ProductsList = (props) => {
  return (
    <DivProductList className="product-list" wrappercss={props.wrappercss} wrapper2css={props.wrapper2css} >
      {props.products.map((item, key) => <ProductItem key={key} addToCart={props.addToCart} DeleteFromCart={props.DeleteFromCart} Artist={props.Artist} ProductTitle={props.ProductTitle} invisibleItemTotPrice={props.invisibleItemTotPrice} invisiblePrice={props.invisiblePrice} productcss={props.productcss} product2css={props.product2css} invisibleDescription={props.invisibleDescription} invisibleQuantity={props.invisibleQuantity} invisibleButtonAdd={props.invisibleButtonAdd} invisibleButtonDelete={props.invisibleButtonDelete} item={item} />)}
    </DivProductList>
  )
}

export default ProductsList;
