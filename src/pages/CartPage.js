import { Fragment } from 'react';
import Cart from '../components/Cart/Cart';
import Footer from '../components/HomePage/Footer';

const CartPage = ({
  cart,
  updateCartQtyHandler,
  removeFromCartHandler,
  emptyCartHandler,
  isLoading,
  error,
}) => {
  return (
    <Fragment>
      <Cart
        cart={cart}
        updateCartQtyHandler={updateCartQtyHandler}
        removeFromCartHandler={removeFromCartHandler}
        emptyCartHandler={emptyCartHandler}
        isLoading={isLoading}
        error={error}
      />
      <Footer />
    </Fragment>
  );
};

export default CartPage;
