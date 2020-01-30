import React from 'react';

import { CartItemContainer, CartItemImg, CartItemDetails } from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImg src={imageUrl} alt='item' />
    <CartItemDetails>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </CartItemDetails>
  </CartItemContainer>
);

export default React.memo(CartItem);