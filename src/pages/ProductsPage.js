import { Fragment } from 'react';
import Products from '../components/Products/Products';
import Footer from '../components/HomePage/Footer';

const ProductsPage = ({
  products,
  decreasePageNoHandler,
  increasePageNoHandler,
  disableDecreaseButton,
  disableIncreaseButton,
}) => {
  return (
    <Fragment>
      <Products
        products={products}
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
