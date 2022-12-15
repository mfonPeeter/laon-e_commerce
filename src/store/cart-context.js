import React from 'react';

const CartContext = React.createContext({
  isLoading: false,
  errorMessage: '',
  products: [],
  cart: {},
  order: {},
  totalItems: 0,
  disableDecreaseButton: true,
  disableIncreaseButton: false,
  addToCartHandler: (productId, quantity) => {},
  updateCartQtyHandler: (productId, quantity) => {},
  removeFromCartHandler: productId => {},
  emptyCartHandler: () => {},
  captureCheckoutHandler: (checkoutTokenId, newOrder) => {},
  decreasePageNoHandler: () => {},
  increasePageNoHandler: () => {},
});

export default CartContext;
