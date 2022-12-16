import { useContext } from 'react';
import { Link } from 'react-router-dom';

import CartContext from '../../store/cart-context';

const Product = ({ product }) => {
  const cartCtx = useContext(CartContext);

  const { formatted_with_symbol: formattedWithSymbol } = product.price;

  return (
    <div className="group px-2 pb-2 bg-white rounded font-serif transition-shadow hover:shadow-2xl">
      <Link
        to={`/products/${product.id}`}
        onClick={() => {
          cartCtx.retrieveProductsHandler(product.id);
        }}
        className="inline-block"
      >
        <div className="flex justify-center">
          <img
            src={product.image.url}
            alt="Xiaomi 12T pro specs"
            className="w-full h-full mb-2"
          />
        </div>

        <div>
          <span className="inline-block mb-2 p-1 text-sm text-white bg-[#276076] rounded-sm">
            Official Store
          </span>
          <h5 className="leading-tight">{product.name}</h5>
          <h5
            className="h-12 mb-2 leading-tight sm:h-14 xl:h-9"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
          <h5 className="mb-4 text-xl font-sans font-bold">
            {formattedWithSymbol}
          </h5>
        </div>
      </Link>

      <button
        onClick={() => cartCtx.addToCartHandler(product.id, 1)}
        className="w-full py-2 text-sm text-white bg-blue-700 shadow-lg outline-blue-900 uppercase rounded transition hover:bg-blue-800 lg:opacity-0 lg:group-hover:opacity-100"
      >
        Add to cart
      </button>

      {/* <Link to={`/products/${product.id}`}><Link /> */}
    </div>
  );
};

export default Product;
