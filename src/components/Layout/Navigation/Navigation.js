import useNavigation from '../../../hooks/use-navigation';
import useModal from '../../../hooks/use-modal';

import NavigationList from './NavigationList';
import NavigationSummary from './NavigationSummary';
import CartIcon from './NavigationIcons/CartIcon';
import MobileNavigation from './MobileNavigation';
import { xiaomiData, redmiData, smartDeviceData } from './NavigationImgData';

const Navigation = () => {
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
    <div className="px-6 py-4 bg-gradient-to-r from-[#ECD8EF] via-[#FFFFFF] to-[#F5F4F7]">
      <nav className="container mx-auto max-w-screen-xl flex items-center justify-between font-lora font-semibold">
        {/* Menu & Logo Container*/}
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu */}
          <div className="lg:hidden">
            <button
              className="hamburger focus:outline-none lg:hidden"
              onClick={showNavModalHandler}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>

          <h2 className="text-blue-700 font-bold text-4xl">Laon</h2>
        </div>

        <div className="flex space-x-4 items-center sm:space-x-12">
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
          <a href="products-link" className="products-link">
            All Products
          </a>

          <a
            href="cart"
            className="relative flex items-center w-16 h-16 transition-colors hover:text-blue-700"
          >
            <CartIcon />
            <span>Cart</span>
            <span className="absolute top-3 right-8 flex items-center justify-center text-xs w-4 h-4 text-white bg-blue-800 rounded-full">
              1
            </span>
          </a>
        </div>
      </nav>

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
    </div>
  );
};

export default Navigation;
