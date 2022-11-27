import Product from './Product';

const Products = ({ products }) => {
  return (
    <main>
      <div className="grid grid-cols-2 gap-2 px-2 py-4 mb-2 sm:grid-cols-3 md:px-3 md:grid-cols-4 lg:px-4 lg:grid-cols-5">
        {products.map(product => (
          <div key={product.id} className="grid grid-flow-row auto-rows-fr">
            <Product product={product} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Products;
