import CartItem from './CartItem';

const Cart = ({ cart }) => {
  const { line_items: lineItems } = cart;

  // console.log(lineItems);

  // console.log(subtotal);

  const FilledCart = () => (
    <div>
      <div className="lg:flex lg:flex-row-reverse lg:items-start lg:space-x-4 lg:space-x-reverse">
        <div className="sticky-cart-summary p-2 mb-4 font-lora bg-white rounded lg:w-1/3">
          <div className="flex justify-between mb-2">
            <h3 className="font-semibold">Subtotal (3 items)</h3>
            <h4 className="text-lg font-bold md:text-xl">
              {/* {formattedWithSymbol.slice(0, -3)} */}
              2000
            </h4>
          </div>
          <p className="-mt-1 text-gray-700 text-sm lg:mb-3">
            Delivery fees not included
          </p>

          <div className="hidden lg:block lg:mb-3 lg:border-b" />

          <div className="hidden font-lora px-2 lg:block lg:px-0">
            <button className="py-3 w-full text-center text-white font-semibold bg-blue-700 rounded-md outline-blue-900 shadow-xl transition-colors hover:bg-blue-800">
              Proceed to checkout
            </button>
          </div>
        </div>

        <div className="sticky-default bg-white font-lora p-2 mb-4 shadow-md lg:hidden">
          <button className="py-3 w-full text-center text-white font-semibold bg-blue-700 rounded-md outline-blue-900 shadow-xl transition-colors hover:bg-blue-800">
            Proceed to checkout
          </button>
        </div>

        <div className="mb-4">
          {lineItems.map(item => (
            <div key={item.id}>
              <CartItem item={item} />
            </div>
          ))}
        </div>
      </div>

      <div className="px-2 mb-4 lg:px-0">
        <button className="w-full p-2 text-white font-semibold font-lora bg-blue-700 rounded-md outline-blue-900 shadow-xl transition-colors hover:bg-blue-800 sm:w-52">
          Empty cart
        </button>
      </div>
    </div>
  );

  if (!lineItems) return <p>Loading...</p>;

  // const { formatted_with_symbol: formattedWithSymbol } = cart.subTotal;

  return (
    <div className="container mx-auto max-w-3xl mt-3 lg:max-w-7xl lg:px-8">
      <h2 className="px-2 mb-4 text-xl text-gray-700 font-lora font-bold md:text-2xl">
        Shopping Cart
      </h2>
      {lineItems && <FilledCart />}
    </div>
  );
};

export default Cart;
