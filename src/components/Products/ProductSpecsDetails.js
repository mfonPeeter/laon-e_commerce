import { Fragment } from 'react';

const ProductSpecsDetails = ({ heading, text }) => {
  return (
    <Fragment>
      {text && (
        <div className="flex space-x-6 mb-8 pb-8 border-b">
          <h5 className="w-1/3 text-xl font-semibold sm:text-2xl">{heading}</h5>
          <p className="w-3/4 max-w-2xl">{text}</p>
        </div>
      )}
    </Fragment>
  );
};

export default ProductSpecsDetails;
