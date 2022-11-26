import Product from './Product';
import Pagination from '../../ui/Pagination';

const Products = ({
  products,
  decreasePageNoHandler,
  increasePageNoHandler,
  disableDecreaseButton,
  disableIncreaseButton,
}) => {
  return (
    <main>
      <div className="grid grid-cols-2 gap-2 px-2 py-4 mb-4 sm:grid-cols-3 md:px-3 md:grid-cols-4 lg:px-4 lg:grid-cols-5">
        {products.map(product => (
          <div key={product.id} className="grid grid-flow-row auto-rows-fr">
            <Product product={product} />
          </div>
        ))}
      </div>
      <Pagination
        decreasePageNoHandler={decreasePageNoHandler}
        increasePageNoHandler={increasePageNoHandler}
        disableDecreaseButton={disableDecreaseButton}
        disableIncreaseButton={disableIncreaseButton}
      />
    </main>
  );
};

export default Products;
