import { Fragment } from 'react';

import Products from '../components/Products/Products';
import Footer from '../components/HomePage/Footer';
import Pagination from '../ui/Pagination';

const ProductsPage = ({
  products,
  onAddToCart,
  decreasePageNoHandler,
  increasePageNoHandler,
  disableDecreaseButton,
  disableIncreaseButton,
  isLoading,
  error,
}) => {
  return (
    <Fragment>
      <Products
        products={products}
        onAddToCart={onAddToCart}
        isLoading={isLoading}
        error={error}
      />
      <Pagination
        decreasePageNoHandler={decreasePageNoHandler}
        increasePageNoHandler={increasePageNoHandler}
        disableDecreaseButton={disableDecreaseButton}
        disableIncreaseButton={disableIncreaseButton}
      />
      <Footer />
    </Fragment>
  );
};

export default ProductsPage;
