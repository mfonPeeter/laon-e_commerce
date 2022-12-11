const Review = ({ checkoutToken }) => {
  const {
    line_items: lineItems,
    subtotal: { formatted_with_symbol: formattedWithSymbol },
  } = checkoutToken;

  return (
    <div>
      <h3 className="mb-8 text-xl text-gray-800">Order Summary</h3>
      <ul>
        {lineItems.map(product => {
          const {
            line_total: { formatted_with_symbol: formattedWithSymbol },
          } = product;

          return (
            <li
              key={product.id}
              className="flex justify-between items-center mb-8"
            >
              <div className="flex flex-col">
                <span className="font-semibold text-gray-700">
                  {product.name}
                </span>
                <span className="text-gray-600 text-sm">
                  Quantity: {product.quantity}
                </span>
              </div>
              <span>{formattedWithSymbol}</span>
            </li>
          );
        })}
        <li className="flex justify-between">
          <span className="font-semibold text-gray-700">Total</span>
          <span className="font-bold text-lg">{formattedWithSymbol}</span>
        </li>
      </ul>
    </div>
  );
};

export default Review;
