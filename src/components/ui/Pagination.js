import { useContext } from 'react';
import { Link } from 'react-router-dom';

import LeftArrow from '../../components/Products/ProductsIcon/ArrowIcon';
import RightArrow from '../../components/Products/ProductsIcon/ArrowIcon';

import CartContext from '../../store/cart-context';

const Pagination = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div className="flex items-center justify-center space-x-4 mb-6">
      <Link
        reloadDocument
        to="/products"
        className={`page-link-btn group ${
          cartCtx.disableDecreaseButton
            ? 'pointer-events-none border-gray-400'
            : 'border-blue-700'
        }`}
        onClick={cartCtx.decreasePageNoHandler}
      >
        <button
          className={`transition-colors group-hover:text-white group-active:text-white ${
            cartCtx.disableDecreaseButton ? 'text-gray-400' : 'text-blue-800'
          }`}
        >
          <LeftArrow />
        </button>
      </Link>

      <Link
        reloadDocument
        to="/products"
        className={`page-link ${
          cartCtx.disableDecreaseButton
            ? 'pointer-events-none bg-blue-700 text-white'
            : ''
        }`}
        onClick={cartCtx.decreasePageNoHandler}
      >
        1
      </Link>

      <Link
        reloadDocument
        to="/products?page=2"
        className={`page-link ${
          cartCtx.disableIncreaseButton
            ? 'pointer-events-none bg-blue-700 text-white'
            : ''
        }`}
        onClick={cartCtx.increasePageNoHandler}
      >
        2
      </Link>

      <Link
        reloadDocument
        to="/products?page=2"
        className={`page-link-btn group ${
          cartCtx.disableIncreaseButton
            ? 'pointer-events-none border-gray-400'
            : 'border-blue-700'
        }`}
        onClick={cartCtx.increasePageNoHandler}
      >
        <button
          className={`transition-colors group-hover:text-white group-active:text-white rotate-180 ${
            cartCtx.disableIncreaseButton ? 'text-gray-400' : 'text-blue-800'
          }`}
        >
          <RightArrow />
        </button>
      </Link>
    </div>
  );
};

export default Pagination;
