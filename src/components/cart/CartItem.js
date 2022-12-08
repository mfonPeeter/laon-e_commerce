const CartItem = ({ item }) => {
  const { line_total: lineTotal } = item;
  const { formatted_with_symbol: formattedWithSymbol } = lineTotal;

  return (
    <div className="p-2 mb-2 bg-white rounded">
      <div className="flex space-x-1 mb-2 md:space-x-4">
        <div className="w-1/3 sm:w-1/5 md:w-1/6">
          <img src={item.image.url} alt={item.name} className="w-full " />
        </div>
        <div className="w-10/12">
          <h4>{item.name}</h4>
          <h4 className="font-bold text-lg">
            {formattedWithSymbol.slice(0, -3)}
          </h4>
          <p className="text-sm text-gray-700">In Stock</p>
          <p className="text-md font-lora font-semibold uppercase">
            <span className="font-semibold text-blue-800">Laon</span>Express
          </p>
          <p className=" max-w-sm text-sm text-gray-700 leading-right">
            Laon Express items in your order will be delivered for free (Lagos,
            Ibadan & Abuja only, exluding large items)
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button className="flex items-center space-x-1 px-2 py-1 rounded first-letter:transition-colors outline-blue-900 hover:bg-blue-200">
          <ion-icon name="trash" id="delete-icon"></ion-icon>
          <span className="text-blue-600 font-semibold uppercase">Remove</span>
        </button>

        <div className="flex items-center space-x-10 lg:space-x-6">
          <button
            className={`w-8 h-8 text-white text-4xl rounded transition-colors ${
              item.quantity === 1
                ? 'bg-blue-300'
                : 'bg-blue-700 outline-blue-900 hover:bg-blue-800 shadow-[1px_4px_8px_0.5px_rgba(0,0,0,0.3)]'
            }  `}
          >
            <span className="flex items-end justify-center w-full h-full">
              -
            </span>
          </button>
          <span>{item.quantity}</span>
          <button className=" w-8 h-8 bg-blue-700 text-white text-3xl rounded shadow-[1px_4px_8px_0.5px_rgba(0,0,0,0.3)] transition-colors outline-blue-900 hover:bg-blue-800">
            <span className="flex items-end justify-center w-full h-full">
              +
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
