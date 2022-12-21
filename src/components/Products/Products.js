import { useContext } from 'react';

import SkeletonProduct from '../../skeletons/SkeletonProduct';
import SmallLoadingSpinner from '../UI/SmallLoadingSpinner';
import Product from './Product';

import CartContext from '../../store/cart-context';

const Products = () => {
  const cartCtx = useContext(CartContext);

  return (
    <main>
      {cartCtx.isLoading && (
        <div className="sticky-default flex items-center justify-center space-x-2 w-full py-1 bg-blue-400 text-white text-center">
          <h5>Product have added successfully</h5>
          <SmallLoadingSpinner />
        </div>
      )}

      {cartCtx.products.length !== 0 && (
        <div className="grid grid-cols-2 gap-2 px-2 py-4 mb-2 sm:grid-cols-3 md:px-3 md:grid-cols-4 lg:px-4 lg:grid-cols-5">
          {cartCtx.products.map(product => (
            <div key={product.id} className="grid grid-flow-row auto-rows-fr">
              <Product product={product} />
            </div>
          ))}
        </div>
      )}

      {cartCtx.products.length === 0 && !cartCtx.errorMessage && (
        <div className="grid grid-cols-2 gap-2 px-2 py-4 mb-2 sm:grid-cols-3 md:px-3 md:grid-cols-4 lg:px-4 lg:grid-cols-5">
          {Array.from({ length: 20 }).map(() => (
            <SkeletonProduct key={Math.random()} />
          ))}
        </div>
      )}

      {cartCtx.errorMessage && (
        <p className="my-28 text-xl font-semibold text-center">
          {cartCtx.errorMessage}
        </p>
      )}
    </main>
  );
};

export default Products;
