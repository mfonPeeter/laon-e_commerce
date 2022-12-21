import { useContext, Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';

import useNavigation from '../../../hooks/use-navigation';
import useModal from '../../../hooks/use-modal';

import NavigationList from './NavigationList';
import NavigationSummary from './NavigationSummary';
import CartIcon from './NavigationIcons/CartIcon';
import MobileNavigation from './MobileNavigation';
import { xiaomiData, redmiData, smartDeviceData } from './NavigationImgData';
import MenuBar from './NavigationIcons/MenuBar';
import laonLogo from '../../../assets/laon-logo.png';

import CartContext from '../../../store/cart-context';
import AuthContext from '../../../store/auth-context';

const Navigation = () => {
  const location = useLocation();
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const { isLoggedIn } = authCtx;

  const {
    showXiaomiNavSum,
    showRedmiNavSum,
    showSmartDeviceNavSum,
    openXiaomiNavSumHandler,
    closeXiaomiNavSumHandler,
    openRedmiNavSumHandler,
    closeRedmiNavSumHandler,
    openSmartDeviceNavSumHandler,
    closeSmartDeviceNavSumHandler,
  } = useNavigation();
  const {
    showModal: showNavModal,
    showModalHandler: showNavModalHandler,
    closeModalHandler: closeNavModalHandler,
  } = useModal();

  return (
    <Fragment>
      <div
        className={`px-6 py-2 bg-gradient-to-r from-[#ECD8EF] via-[#FFFFFF] to-[#F5F4F7] ${
          location.pathname === '/checkout' && 'sticky-default'
        }`}
      >
        <nav className="relative z-10 container mx-auto max-w-screen-xl flex items-center justify-between font-lora font-semibold">
          {/* Menu & Logo Container*/}
          <div className="flex items-center space-x-3">
            {/* Hamburger Menu */}
            {location.pathname !== '/checkout' && (
              <button
                className="outline-blue-800 lg:hidden"
                onClick={() => showNavModalHandler('overflow-y-hidden')}
              >
                <MenuBar />
              </button>
            )}

            <Link to="/home" className="inline-block outline-blue-800">
              <img
                src={laonLogo}
                alt="Laon Logo"
                className="w-[70px] h-[70px]"
              />
            </Link>
          </div>

          {location.pathname !== '/checkout' && (
            <div className="flex space-x-4 items-center sm:space-x-4 md:space-x-8">
              <ul className="z-10 hidden space-x-12 items-center lg:flex">
                <NavigationList
                  text="Xiaomi Phones"
                  onOpenNavSum={openXiaomiNavSumHandler}
                />
                <NavigationList
                  text="Redmi Phones"
                  onOpenNavSum={openRedmiNavSumHandler}
                />
                <NavigationList
                  text="Smart Device"
                  onOpenNavSum={openSmartDeviceNavSumHandler}
                />
              </ul>

              <Link
                to="/products"
                className="hidden products-link sm:inline-block"
              >
                All Products
              </Link>

              {!isLoggedIn && (
                <Link
                  to="/auth"
                  className="px-4 py-2 transition-colors outline-blue-800 hover:text-blue-700"
                >
                  Login
                </Link>
              )}
              {isLoggedIn && (
                <button
                  onClick={authCtx.logout}
                  className="px-4 py-2 rounded transition-colors outline-blue-800 hover:bg-gray-100 hover:text-blue-700"
                >
                  Logout
                </button>
              )}

              <Link
                to="/cart"
                className="relative flex items-center w-16 h-16 transition-colors outline-blue-800 hover:text-blue-700"
              >
                <CartIcon />
                <span>Cart</span>
                <span className="absolute top-3 right-8 flex items-center justify-center text-xs w-4 h-4 text-white bg-blue-800 rounded-full">
                  {cartCtx.totalItems > 0 ? cartCtx.totalItems : 0}
                </span>
              </Link>
            </div>
          )}
        </nav>
      </div>

      {!showRedmiNavSum && !showSmartDeviceNavSum && (
        <NavigationSummary
          data={xiaomiData}
          showNavSum={showXiaomiNavSum}
          onCloseNavSum={closeXiaomiNavSumHandler}
        />
      )}
      {!showXiaomiNavSum && !showSmartDeviceNavSum && (
        <NavigationSummary
          data={redmiData}
          showNavSum={showRedmiNavSum}
          onCloseNavSum={closeRedmiNavSumHandler}
        />
      )}
      {!showXiaomiNavSum && !showRedmiNavSum && (
        <NavigationSummary
          data={smartDeviceData}
          showNavSum={showSmartDeviceNavSum}
          onCloseNavSum={closeSmartDeviceNavSumHandler}
        />
      )}

      <MobileNavigation
        showNavModal={showNavModal}
        closeNavModalHandler={closeNavModalHandler}
      />
    </Fragment>
  );
};

export default Navigation;
