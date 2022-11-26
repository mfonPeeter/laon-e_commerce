import { Link } from 'react-router-dom';

import LeftArrow from '../components/Products/ProductsIcon/ArrowIcon';
import RightArrow from '../components/Products/ProductsIcon/ArrowIcon';

const Pagination = ({
  decreasePageNoHandler,
  increasePageNoHandler,
  disableDecreaseButton,
  disableIncreaseButton,
}) => {
  return (
    <div className="flex items-center justify-center space-x-4 mb-6">
      <Link
        to="products"
        className={`page-link-btn group ${
          disableDecreaseButton
            ? 'pointer-events-none border-gray-400'
            : 'border-blue-700'
        }`}
        onClick={decreasePageNoHandler}
      >
        <button
          className={`transition-colors group-hover:text-white group-active:text-white ${
            disableDecreaseButton ? 'text-gray-400' : 'text-blue-800'
          }`}
        >
          <LeftArrow />
        </button>
      </Link>

      <Link
        to="products"
        className={`page-link ${
          disableDecreaseButton
            ? 'pointer-events-none bg-blue-700 text-white'
            : ''
        }`}
        onClick={decreasePageNoHandler}
      >
        1
      </Link>
      <Link
        to="product?page=2"
        className={`page-link ${
          disableIncreaseButton
            ? 'pointer-events-none bg-blue-700 text-white'
            : ''
        }`}
        onClick={increasePageNoHandler}
      >
        2
      </Link>

      <Link
        to="products?page=2"
        className={`page-link-btn group ${
          disableIncreaseButton
            ? 'pointer-events-none border-gray-400'
            : 'border-blue-700'
        }`}
        onClick={increasePageNoHandler}
      >
        <button
          className={`transition-colors group-hover:text-white group-active:text-white rotate-180 ${
            disableIncreaseButton ? 'text-gray-400' : 'text-blue-800'
          }`}
        >
          <RightArrow />
        </button>
      </Link>
    </div>
  );
};

export default Pagination;
