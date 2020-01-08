import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsTotal
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeButton from "../../components/stripe-button/stripe-button.component";

import {
  CheckOutPageContainer,
  CheckOutPageHeader,
  CheckOutPageHeaderBlock,
  CheckOutPageTotal,
  CheckOutTestingWarning
} from "./checkout.styles";

const CheckoutPage = ({ cartItems, total }) => (
  <CheckOutPageContainer>
    <CheckOutPageHeader>
      <CheckOutPageHeaderBlock>
        <span>Product</span>
      </CheckOutPageHeaderBlock>
      <CheckOutPageHeaderBlock>
        <span>Description</span>
      </CheckOutPageHeaderBlock>
      <CheckOutPageHeaderBlock>
        <span>Quantity</span>
      </CheckOutPageHeaderBlock>
      <CheckOutPageHeaderBlock>
        <span>Price</span>
      </CheckOutPageHeaderBlock>
      <CheckOutPageHeaderBlock>
        <span>Remove</span>
      </CheckOutPageHeaderBlock>
    </CheckOutPageHeader>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <CheckOutPageTotal>
      <span>TOTAL ${total.toFixed(2)}</span>
    </CheckOutPageTotal>
    <CheckOutTestingWarning>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </CheckOutTestingWarning>
    <StripeButton price={total} />
  </CheckOutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal
});

export default connect(mapStateToProps)(CheckoutPage);
