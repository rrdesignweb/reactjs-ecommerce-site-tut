import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import { toggleCartHidden } from "../../redux/cart/cart.action";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import { CartDropDownContainer, CartItemsContainer } from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropDownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
          <span className="empty-message">Your Cart is Empty</span>
        )}
    </CartItemsContainer>
    <CustomButton onClick={() => {
      history.push("/checkout");
      dispatch(toggleCartHidden());
    }}>
      GO TO CHECKOUT
    </CustomButton>
  </CartDropDownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
