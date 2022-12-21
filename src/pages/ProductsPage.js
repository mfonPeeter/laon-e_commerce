import { Fragment } from 'react';

import Products from '../components/Products/Products';
import Footer from '../components/HomePage/Footer';
import Pagination from '../components/UI/Pagination';

const ProductsPage = () => {
  return (
    <Fragment>
      <Products />
      <Pagination />
      <Footer />
    </Fragment>
  );
};

export default ProductsPage;
