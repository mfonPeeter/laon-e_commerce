import { Fragment } from 'react';
import Products from '../components/Products/Products';
import Footer from '../components/HomePage/Footer';

const ProductsPage = ({ products }) => {
  return (
    <Fragment>
      <Products products={products} />
      <Footer />
    </Fragment>
  );
};

export default ProductsPage;
