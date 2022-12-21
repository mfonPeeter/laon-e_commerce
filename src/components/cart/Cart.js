import { useContext } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import CartItem from './CartItem';
import CartIcon from '../Layout/Navigation/NavigationIcons/CartIcon';
import LoadingSpinner from '../ui/LoadingSpinner';

import CartContext from '../../store/cart-context';
import AuthContext from '../../store/auth-context';

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const { line_items: lineItems, total_items: totalItems } = cartCtx.cart;

  const EmptyCart = () => (
    <div className="w-full text-center px-2 py-28 mb-6 bg-white rounded">
      <div className="flex justify-center mb-4">
        <div className="w-24 h-24 p-3 bg-gray-200 text-blue-700 rounded-full">
          <CartIcon />
        </div>
      </div>
      <div>
        <h5 className="mb-3 text-gray-700 font-semibold">
          Your cart is empty!
        </h5>
        <p className="mb-6 text-sm">
          Browse our categories and discover our best deals!
        </p>
        <Link
          to="/products"
          className="cart-link inline-block py-3 w-44 uppercase"
        >
          Start Shopping
        </Link>
      </div>
    </div>
  );

  const FilledCart = () => (
    <>
      <div className="lg:flex lg:flex-row-reverse lg:items-start lg:space-x-4 lg:space-x-reverse">
        <div className="sticky-cart-summary p-2 mb-4 font-lora bg-white rounded lg:w-1/3">
          <div className="flex justify-between mb-2">
            <h3 className="font-semibold">Subtotal ({totalItems} items)</h3>
            <h4 className="text-lg font-bold md:text-xl">
              {formattedWithSymbol}
            </h4>
          </div>
          <p className="-mt-1 text-gray-700 text-sm lg:mb-3">
            Delivery fees not included
          </p>

          <div className="hidden lg:block lg:mb-3 lg:border-b" />

          <div className="hidden font-lora px-2 lg:block lg:px-0">
            <button
              onClick={() =>
                authCtx.isLoggedIn
                  ? navigate('/checkout')
                  : navigate('/auth', { replace: true })
              }
              className="cart-btn py-3 w-full"
            >
              Proceed to checkout
            </button>
          </div>
        </div>

        <div className="sticky-default bg-white font-lora p-2 mb-4 shadow-md lg:hidden">
          <Link reloadDocument to="/checkout">
            <button className="cart-btn py-3 w-full">
              Proceed to checkout
            </button>
          </Link>
        </div>

        <div className="mb-4">
          {lineItems.map(item => (
            <div key={item.id}>
              <CartItem item={item} />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6 px-2 md:px-0">
        <button
          onClick={cartCtx.emptyCartHandler}
          className="cart-btn w-full p-2 sm:w-52"
        >
          Empty cart
        </button>
      </div>
    </>
  );

  if (cartCtx.cartErrorMessage)
    return (
      <p className="my-36 text-xl font-semibold text-center">
        {cartCtx.errorMessage}
      </p>
    );

  if (!lineItems)
    return (
      <div className="mb-52">
        <LoadingSpinner />
      </div>
    );

  const {
    subtotal: { formatted_with_symbol: formattedWithSymbol },
  } = cartCtx.cart;

  return (
    <div className="container mx-auto max-w-3xl mt-3 lg:max-w-7xl lg:px-8">
      {lineItems && (
        <h2 className="px-2 mb-4 text-xl text-gray-700 font-lora font-bold md:px-0 md:text-2xl">
          Shopping Cart
        </h2>
      )}

      {!lineItems.length ? <EmptyCart /> : <FilledCart />}
    </div>
  );
};

export default Cart;
