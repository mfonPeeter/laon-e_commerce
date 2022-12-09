import Cart from '../components/Cart/Cart';

const CartPage = ({
  cart,
  updateCartQtyHandler,
  removeFromCartHandler,
  emptyCartHandler,
  isLoading,
}) => {
  return (
    <Cart
      cart={cart}
      updateCartQtyHandler={updateCartQtyHandler}
      removeFromCartHandler={removeFromCartHandler}
      emptyCartHandler={emptyCartHandler}
      isLoading={isLoading}
    />
  );
};

export default CartPage;
