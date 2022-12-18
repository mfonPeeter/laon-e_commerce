import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Footer from '../HomePage/Footer';
import CartContext from '../../store/cart-context';
import LoadingSpinner from '../../ui/LoadingSpinner';

const ProductsSpecs = () => {
  const cartCtx = useContext(CartContext);

  const params = useParams();

  const { attribute, retrieveProductsHandler } = cartCtx;

  // Call the function when page is refreshed
  useEffect(() => {
    retrieveProductsHandler(params.productId);
  }, [retrieveProductsHandler, params.productId]);

  if (Object.keys(attribute).length === 0) return <LoadingSpinner />;

  console.log(cartCtx.attribute);

  return (
    <div className="mt-3 bg-white">
      <div className="sticky-default pb-3 bg-gray-100">
        <h2 className="products-specs-container text-2xl">
          {attribute.attributes[0].value}
        </h2>
      </div>

      <div className="products-specs-container mt-7 mb-10">
        <div className="flex items-center space-x-6 mb-8 pb-8 border-b">
          <h5 className="w-1/3 text-xl font-semibold sm:text-2xl">
            {attribute.attributes[1].name}
          </h5>
          <p className="w-3/4 max-w-2xl">{attribute.attributes[1].value}</p>
        </div>

        <div className="flex space-x-6 mb-8 pb-8 border-b">
          <h5 className="w-1/3 text-xl font-semibold sm:text-2xl">
            {attribute.attributes[2].name}
          </h5>
          <p className="w-3/4 max-w-2xl">{attribute.attributes[2].value}</p>
        </div>

        <div className="flex space-x-6 mb-8 pb-8 border-b">
          <h5 className="w-1/3 text-xl font-semibold sm:text-2xl">
            {attribute.attributes[3].name}
          </h5>
          <p className="w-3/4 max-w-2xl">{attribute.attributes[3].value}</p>
        </div>

        <div className="flex space-x-6 mb-8 pb-8 border-b">
          <h5 className="w-1/3 text-xl font-semibold sm:text-2xl">
            {attribute.attributes[4].name}
          </h5>
          <p className="w-3/4 max-w-2xl">{attribute.attributes[4].value}</p>
        </div>

        <div className="flex space-x-6 mb-8 pb-8 border-b">
          <h5 className="w-1/3 text-xl font-semibold sm:text-2xl">
            {attribute.attributes[5].name}
          </h5>
          <p className="w-3/4 max-w-2xl">{attribute.attributes[5].value}</p>
        </div>

        <div className="flex space-x-6 mb-8 pb-8 border-b">
          <h5 className="w-1/3 text-xl font-semibold sm:text-2xl">
            {attribute.attributes[6].name}
          </h5>
          <p className="w-3/4 max-w-2xl">{attribute.attributes[6].value}</p>
        </div>

        <div className="flex space-x-6 mb-8 pb-8 border-b">
          <h5 className="w-1/3 text-xl font-semibold sm:text-2xl">
            {attribute.attributes[7].name}
          </h5>
          <p className="w-3/4 max-w-2xl">{attribute.attributes[7].value}</p>
        </div>

        <div className="flex space-x-6 mb-8 pb-8 border-b">
          <h5 className="w-1/3 text-xl font-semibold sm:text-2xl">
            {attribute.attributes[8].name}
          </h5>
          <p className="w-3/4 max-w-2xl">{attribute.attributes[8].value}</p>
        </div>

        <div className="flex space-x-6 mb-8 pb-8 border-b">
          <h5 className="w-1/3 text-xl font-semibold sm:text-2xl">
            {attribute.attributes[9].name}
          </h5>
          <p className="w-3/4 max-w-2xl">{attribute.attributes[9].value}</p>
        </div>

        <div className="flex space-x-6 mb-8 pb-8 border-b">
          <h5 className="w-1/3 text-xl font-semibold sm:text-2xl">
            {attribute.attributes[10].name}
          </h5>
          <p className="w-3/4 max-w-2xl">{attribute.attributes[10].value}</p>
        </div>

        <div className="flex space-x-6 mb-8 pb-8 border-b">
          <h5 className="w-1/3 text-xl font-semibold sm:text-2xl">
            {attribute.attributes[11].name}
          </h5>
          <p className="w-3/4 max-w-2xl">{attribute.attributes[11].value}</p>
        </div>

        <div className="flex space-x-6 mb-8 pb-8 border-b">
          <h5 className="w-1/3 text-xl font-semibold sm:text-2xl">
            {attribute.attributes[12].name}
          </h5>
          <p className="w-3/4 max-w-2xl">{attribute.attributes[12].value}</p>
        </div>

        <div className="flex space-x-6 mb-8 pb-8 border-b">
          <h5 className="w-1/3 text-xl font-semibold sm:text-2xl">
            {attribute.attributes[13].name}
          </h5>
          <p className="w-3/4 max-w-2xl">{attribute.attributes[13].value}</p>
        </div>

        <div className="flex space-x-6 mb-8 pb-8 border-b">
          <h5 className="w-1/3 text-xl font-semibold sm:text-2xl">
            {attribute.attributes[14].name}
          </h5>
          <p className="w-3/4 max-w-2xl">{attribute.attributes[14].value}</p>
        </div>

        <div className="flex space-x-6 mb-8 pb-8 border-b">
          <h5 className="w-1/3 text-xl font-semibold sm:text-2xl">
            {attribute.attributes[15].name}
          </h5>
          <p className="w-3/4 max-w-2xl">{attribute.attributes[15].value}</p>
        </div>

        <div className="flex space-x-6 mb-8 pb-8 border-b">
          <h5 className="w-1/3 text-xl font-semibold sm:text-2xl">
            {attribute.attributes[16].name}
          </h5>
          <p className="w-3/4 max-w-2xl">{attribute.attributes[16].value}</p>
        </div>

        <div className="flex space-x-6 mb-8 pb-8 border-b">
          <h5 className="w-1/3 text-xl font-semibold sm:text-2xl">
            {attribute.attributes[17].name}
          </h5>
          <p className="w-3/4 max-w-2xl">{attribute.attributes[17].value}</p>
        </div>

        <div className="flex space-x-6 mb-8">
          <h5 className="w-1/3 text-xl font-semibold sm:text-2xl">
            {attribute.attributes[18].name}
          </h5>
          <p className="w-3/4 max-w-2xl">{attribute.attributes[18].value}</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductsSpecs;
