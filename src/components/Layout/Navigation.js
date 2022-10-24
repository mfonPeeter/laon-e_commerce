import CartIcon from './CartIcon';

const Navigation = () => {
  return (
    <div className="px-6 py-4 bg-gradient-to-r from-[#ECD8EF] via-[#FFFFFF] to-[#F5F4F7]">
      <nav className="container mx-auto max-w-screen-xl flex items-center justify-between font-lora font-semibold">
        {/* Menu & Logo Container*/}
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu */}
          <div className="lg:hidden">
            <button className="hamburger focus:outline-none lg:hidden">
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>

          <h2 className="text-blue-700 font-bold text-4xl">Laon</h2>
        </div>

        <div className="flex space-x-4 items-center sm:space-x-12">
          <ul className="hidden space-x-12 items-center lg:flex">
            <li className="navigation-list">Xiaomi Phones</li>
            <li className="navigation-list">Redmi Phones</li>
            <li className="navigation-list">Smart Device</li>
          </ul>
          <a href="#" className="products-link">
            All Products
          </a>
          <button className="relative flex items-center w-16 h-16 transition-colors hover:text-blue-700">
            <CartIcon />
            <span>Cart</span>
            <span className="absolute top-3 right-8 flex items-center justify-center text-xs w-4 h-4 text-white bg-blue-800 rounded-full">
              1
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
