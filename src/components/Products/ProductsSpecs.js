import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Footer from '../HomePage/Footer';
import ProductSpecsDetails from './ProductSpecsDetails';
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
    <div className="bg-white">
      <div className="sticky-default py-4 bg-gray-100">
        <h2 className="products-specs-container text-2xl">
          {attribute.attributes[0].value}
        </h2>
      </div>

      <div className="products-specs-container mt-7 mb-10">
        <ProductSpecsDetails
          heading={attribute.attributes[1].name}
          text={attribute.attributes[1].value}
        />
        <ProductSpecsDetails
          heading={attribute.attributes[2].name}
          text={attribute.attributes[2].value}
        />
        <ProductSpecsDetails
          heading={attribute.attributes[3].name}
          text={attribute.attributes[3].value}
        />
        <ProductSpecsDetails
          heading={attribute.attributes[4].name}
          text={attribute.attributes[4].value}
        />
        <ProductSpecsDetails
          heading={attribute.attributes[5].name}
          text={attribute.attributes[5].value}
        />
        <ProductSpecsDetails
          heading={attribute.attributes[6].name}
          text={attribute.attributes[6].value}
        />
        <ProductSpecsDetails
          heading={attribute.attributes[7].name}
          text={attribute.attributes[7].value}
        />
        <ProductSpecsDetails
          heading={attribute.attributes[8].name}
          text={attribute.attributes[8].value}
        />
        <ProductSpecsDetails
          heading={attribute.attributes[9].name}
          text={attribute.attributes[9].value}
        />
        <ProductSpecsDetails
          heading={attribute.attributes[10].name}
          text={attribute.attributes[10].value}
        />
        <ProductSpecsDetails
          heading={attribute.attributes[11].name}
          text={attribute.attributes[11].value}
        />
        <ProductSpecsDetails
          heading={attribute.attributes[12].name}
          text={attribute.attributes[12].value}
        />
        <ProductSpecsDetails
          heading={attribute.attributes[13].name}
          text={attribute.attributes[13].value}
        />
        <ProductSpecsDetails
          heading={attribute.attributes[14].name}
          text={attribute.attributes[14].value}
        />
        <ProductSpecsDetails
          heading={attribute.attributes[15].name}
          text={attribute.attributes[15].value}
        />
        <ProductSpecsDetails
          heading={attribute.attributes[16].name}
          text={attribute.attributes[16].value}
        />
        <ProductSpecsDetails
          heading={attribute.attributes[17].name}
          text={attribute.attributes[17].value}
        />
        <ProductSpecsDetails
          heading={attribute.attributes[18].name}
          text={attribute.attributes[18].value}
        />
        <ProductSpecsDetails
          heading={attribute.attributes[19].name}
          text={attribute.attributes[19].value}
        />
        <ProductSpecsDetails
          heading={attribute.attributes[20].name}
          text={attribute.attributes[20].value}
        />
        <ProductSpecsDetails
          heading={attribute.attributes[21].name}
          text={attribute.attributes[21].value}
        />
        <ProductSpecsDetails
          heading={attribute.attributes[22].name}
          text={attribute.attributes[22].value}
        />
        <ProductSpecsDetails
          heading={attribute.attributes[23].name}
          text={attribute.attributes[23].value}
        />
        <ProductSpecsDetails
          heading={attribute.attributes[24].name}
          text={attribute.attributes[24].value}
        />
        <ProductSpecsDetails
          heading={attribute.attributes[25].name}
          text={attribute.attributes[25].value}
        />
        <ProductSpecsDetails
          heading={attribute.attributes[26].name}
          text={attribute.attributes[26].value}
        />
        <ProductSpecsDetails
          heading={attribute.attributes[27].name}
          text={attribute.attributes[27].value}
        />
        <ProductSpecsDetails
          heading={attribute.attributes[28].name}
          text={attribute.attributes[28].value}
        />
        <ProductSpecsDetails
          heading={attribute.attributes[29].name}
          text={attribute.attributes[29].value}
        />
        <ProductSpecsDetails
          heading={attribute.attributes[30].name}
          text={attribute.attributes[30].value}
        />
        {attribute.attributes[31].value && (
          <div className="flex space-x-6 mb-8">
            <h5 className="w-1/3 text-xl font-semibold sm:text-2xl">
              {attribute.attributes[31].name}
            </h5>
            <p className="w-3/4 max-w-2xl">{attribute.attributes[31].value}</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductsSpecs;
