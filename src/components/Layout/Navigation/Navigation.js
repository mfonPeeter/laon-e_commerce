import { useState } from 'react';

import NavigationList from './NavigationList';
import NavigationSummary from './NavigationSummary';
import CartIcon from './NavigationIcons/CartIcon';

// Xiaomi phones
import img1 from '../../../assets/nav-products/xiaomi-phones/Xiaomi-12-Pro.png';
import img2 from '../../../assets/nav-products/xiaomi-phones/MI-10-T.png';
import img3 from '../../../assets/nav-products/xiaomi-phones/MI-10-Lite.png';
import img4 from '../../../assets/nav-products/xiaomi-phones/MI-Note-10-Pro.png';

// Redmi Phones
import img5 from '../../../assets/nav-products/redmi-phones/Redmi-Note-11-Pro+5G.png';
import img6 from '../../../assets/nav-products/redmi-phones/Redmi-Note-11-Pro.png';
import img7 from '../../../assets/nav-products/redmi-phones/Redmi-Note-11S.png';
import img8 from '../../../assets/nav-products/redmi-phones/Redmi-Note-11.png';
import img9 from '../../../assets/nav-products/redmi-phones/Redmi-10.png';

// Smart Device
import img10 from '../../../assets/nav-products/smart-device/Redmi-Watch-2-Lite.png';
import img11 from '../../../assets/nav-products/smart-device/Redmi-Buds-3-Pro.png';
import img12 from '../../../assets/nav-products/smart-device/Redmi-Buds-3.png';
import img13 from '../../../assets/nav-products/smart-device/Mi-Watch.png';
import img14 from '../../../assets/nav-products/smart-device/Mi-Smart-Band-5.png';

const xiaomiData = [
  { id: 1, img: img1, title: 'Xiaomi 12 Pro' },
  { id: 2, img: img2, title: 'Mi 10T' },
  { id: 3, img: img3, title: 'Mi 10 Lite' },
  { id: 4, img: img4, title: 'Mi Note 10 Pro' },
];

const redmiData = [
  { id: 1, img: img5, title: 'Redmi Note 11 Pro+ 5g' },
  { id: 2, img: img6, title: 'Remdi Note 11 Pro' },
  { id: 3, img: img7, title: 'Redmi Note 11S' },
  { id: 4, img: img8, title: 'Redmi Note 11' },
  { id: 5, img: img9, title: 'Redmi 10' },
];

const smartDeviceData = [
  { id: 1, img: img10, title: 'Redmi Watch 2 Lite' },
  { id: 2, img: img11, title: 'Redmi Buds 3 Pro' },
  { id: 3, img: img12, title: 'Redmi Buds 3' },
  { id: 4, img: img13, title: 'Mi Watch' },
  { id: 5, img: img14, title: 'Mi Smart Band 5' },
];

const Navigation = () => {
  const [showXiaomiNavSum, setShowXiaomiNavSum] = useState(false);
  const [showRedmiNavSum, setShowRedmiNavSum] = useState(false);
  const [showSmartDeviceNavSum, setShowSmartDeviceNavSum] = useState(false);

  const openXiaomiNavSumHandler = () => {
    setShowXiaomiNavSum(true);
    setShowRedmiNavSum(false);
    setShowSmartDeviceNavSum(false);
  };

  const closeXiaomiNavSumHandler = () => {
    setShowXiaomiNavSum(false);
  };

  const openRedmiNavSumHandler = () => {
    setShowRedmiNavSum(true);
    setShowXiaomiNavSum(false);
    setShowSmartDeviceNavSum(false);
  };

  const closeRedmiNavSumHandler = () => {
    setShowRedmiNavSum(false);
  };

  const openSmartDeviceSumHandler = () => {
    setShowSmartDeviceNavSum(true);
    setShowXiaomiNavSum(false);
    setShowRedmiNavSum(false);
  };

  const closeSmartDeviceSumHandler = () => {
    setShowSmartDeviceNavSum(false);
  };

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
          <ul className="z-10 hidden space-x-12 items-center lg:flex">
            <NavigationList
              text="Xiaomi Phones"
              onOpenNavSum={openXiaomiNavSumHandler}
              onCloseNavSum={closeXiaomiNavSumHandler}
            />
            <NavigationList
              text="Redmi Phones"
              onOpenNavSum={openRedmiNavSumHandler}
              onCloseNavSum={closeRedmiNavSumHandler}
            />
            <NavigationList
              text="Smart Device"
              onOpenNavSum={openSmartDeviceSumHandler}
              onCloseNavSum={closeSmartDeviceSumHandler}
            />
          </ul>
          <a href="#" className="products-link">
            All Products
          </a>

          <a
            href="#"
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
          onCloseNavSum={closeSmartDeviceSumHandler}
        />
      )}
    </div>
  );
};

export default Navigation;
