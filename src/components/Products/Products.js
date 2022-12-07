import SkeletonProduct from '../../skeletons/SkeletonProduct';
import Product from './Product';

const Products = ({ products, onAddToCart }) => {
  return (
    <main>
      {products.length !== 0 && (
        <div className="grid grid-cols-2 gap-2 px-2 py-4 mb-2 sm:grid-cols-3 md:px-3 md:grid-cols-4 lg:px-4 lg:grid-cols-5">
          {products.map(product => (
            <div key={product.id} className="grid grid-flow-row auto-rows-fr">
              <Product product={product} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>
      )}

      {products.length === 0 && (
        <div className="grid grid-cols-2 gap-2 px-2 py-4 mb-2 sm:grid-cols-3 md:px-3 md:grid-cols-4 lg:px-4 lg:grid-cols-5">
          {Array.from({ length: 20 }).map(() => (
            <SkeletonProduct key={Math.random()} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Products;
