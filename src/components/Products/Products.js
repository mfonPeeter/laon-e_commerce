import SkeletonProduct from '../../skeletons/SkeletonProduct';
import SmallLoadingSpinner from '../../ui/SmallLoadingSpinner';
import Product from './Product';

const Products = ({ products, onAddToCart, isLoading, error }) => {
  return (
    <main>
      {isLoading && (
        <div className="sticky-default flex items-center justify-center space-x-2 w-full py-1 bg-blue-400 text-white text-center">
          <h5>Product have added successfully</h5>
          <SmallLoadingSpinner />
        </div>
      )}

      {products.length !== 0 && (
        <div className="grid grid-cols-2 gap-2 px-2 py-4 mb-2 sm:grid-cols-3 md:px-3 md:grid-cols-4 lg:px-4 lg:grid-cols-5">
          {products.map(product => (
            <div key={product.id} className="grid grid-flow-row auto-rows-fr">
              <Product product={product} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>
      )}

      {products.length === 0 && !error && (
        <div className="grid grid-cols-2 gap-2 px-2 py-4 mb-2 sm:grid-cols-3 md:px-3 md:grid-cols-4 lg:px-4 lg:grid-cols-5">
          {Array.from({ length: 20 }).map(() => (
            <SkeletonProduct key={Math.random()} />
          ))}
        </div>
      )}

      {error && (
        <p className="my-20 text-xl font-semibold text-center">{error}</p>
      )}
    </main>
  );
};

export default Products;
