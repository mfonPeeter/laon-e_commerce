import React from 'react';

const CartContext = React.createContext({
  isLoading: false,
  errorMessage: '',
  products: [],
  attribute: {},
  cart: {},
  order: {},
  totalItems: 0,
  disableDecreaseButton: true,
  disableIncreaseButton: false,
  retrieveProductsHandler: productId => {},
  addToCartHandler: (productId, quantity) => {},
  updateCartQtyHandler: (productId, quantity) => {},
  removeFromCartHandler: productId => {},
  emptyCartHandler: () => {},
  captureCheckoutHandler: (checkoutTokenId, newOrder) => {},
  decreasePageNoHandler: () => {},
  increasePageNoHandler: () => {},
});

export default CartContext;
