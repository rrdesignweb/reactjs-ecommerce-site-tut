import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  removeItem,
  addCartItem
} from "../../redux/cart/cart.action";

import {
    CheckoutItemContainer,
    ImageContainer,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer
  } from './checkout-item.styles';
  
  const CheckoutItem = ({ cartItem, clearItem, addCartItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
      <CheckoutItemContainer>
        <ImageContainer>
          <img src={imageUrl} alt='item' />
        </ImageContainer>
        <TextContainer>{name}</TextContainer>
        <QuantityContainer>
          <div onClick={() => removeItem(cartItem)}>&#10094;</div>
          <span>{quantity}</span>
          <div onClick={() => addCartItem(cartItem)}>&#10095;</div>
        </QuantityContainer>
        <TextContainer>{price}</TextContainer>
        <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
          &#10005;
        </RemoveButtonContainer>
      </CheckoutItemContainer>
    );
  };

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addCartItem: item => dispatch(addCartItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
