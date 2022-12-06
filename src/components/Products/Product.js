const Product = ({ product }) => {
  const { formatted_with_symbol: formattedWithSymbol } = product.price;

  return (
    <div className="group px-2 pb-2 bg-white rounded font-serif transition-shadow hover:shadow-2xl">
      <div className="flex justify-center">
        <img
          src={product.image.url}
          alt="Xiaomi 12T pro specs"
          className="w-full h-full mb-2"
        />
      </div>

      <span className="inline-block mb-2 p-1 text-sm text-white bg-[#276076] rounded-sm">
        Official Store
      </span>
      <h5 className="leading-tight">{product.name}</h5>
      <h5
        className="mb-2 leading-tight"
        dangerouslySetInnerHTML={{ __html: product.description }}
      />
      <h5 className="mb-4 text-xl font-sans font-bold">
        {formattedWithSymbol.slice(0, -3)}
      </h5>

      <button className="w-full py-2 text-sm text-white bg-blue-700 shadow-lg outline-blue-900 uppercase rounded transition hover:bg-blue-800 lg:opacity-0 lg:group-hover:opacity-100">
        Add to cart
      </button>
    </div>
  );
};

export default Product;
