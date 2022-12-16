import xiaomiImg from '../../assets/products-specs/mi-phones-specs/xiaomi-12t-pro-specs.webp';
import blueImg from '../../assets/products-specs/mi-phones-specs/blue-color.webp';
import silverImg from '../../assets/products-specs/mi-phones-specs/silver-color.webp';
import blackImg from '../../assets/products-specs/mi-phones-specs/black-color.webp';

import Footer from '../HomePage/Footer';

const Xiaomi12TPro = () => {
  return (
    <div className="mt-6 bg-white">
      <div className=" pb-6 bg-gray-100">
        <h2 className="products-specs-container text-2xl">Xiaomi 12T Pro</h2>
      </div>
      <div className="mb-10 p-6 bg-gray-200 md:p-12 lg:p-16">
        <img
          src={xiaomiImg}
          alt="Xiaomi 12T Pro"
          className="mb-6 md:mb-12 lg:mb-16"
        />
        <div className="flex justify-center space-x-4 sm:space-x-12 lg:space-x-28">
          <div className="flex items-center space-x-1 sm:space-x-2">
            <img src={blueImg} alt="Xiaomi 12T Pro" />
            <span className=" lg:text-lg">Blue</span>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <img src={silverImg} alt="Xiaomi 12T Pro" />
            <span className=" lg:text-lg">Silver</span>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <img src={blackImg} alt="Xiaomi 12T Pro" />
            <span className=" lg:text-lg">Black</span>
          </div>
        </div>
      </div>

      <div className="products-specs-container mb-10">
        <div className="flex space-x-48 mb-8">
          <h5 className="text-3xl font-semibold">Processor</h5>
          <div>
            <p className="text-lg font-semibold">Snapdragon® 8+ Gen 1</p>
            <p>4nm power-efficient manufacturing process</p>
            <p className="mb-1">
              Up to 3.2GHz, with Armv9 Cortex-X2 technology
            </p>
            <p className="font-semibold">CPU:</p>
            <p>1x Prime core (X2-based), 3.2GHz</p>
            <p>3x Gold cores (A710-based), 2.75GHz</p>
            <p className="mb-1">4x Sliver cores (A510-based), 2.0GHz</p>
            <p>
              <span className="font-semibold">GPU:</span> Qualcomm® Adreno™ GPU
            </p>
            <p>7th Gen Qualcomm® AI Engine</p>
          </div>
        </div>

        <hr />

        <div className="flex space-x-28 my-8">
          <h5 className="text-3xl font-semibold ">Storage & RAM</h5>
          <div>
            <p className="mb-1 text-lg font-semibold">
              8GB+128GB | 8GB+256GB | 12GB+256GB
            </p>
            <p className="mb-4">LPDDR5 RAM + UFS 3.1 storage</p>
            <p className="max-w-2xl">
              *Available storage and RAM are less than the total memory due to
              storage of the operating system and software pre-installed on the
              device.
            </p>
          </div>
        </div>

        <hr />

        <div className="flex space-x-40 my-8">
          <h5 className="text-3xl font-semibold">Dimensions</h5>
          <div>
            <p className="text-lg font-semibold">Height: 163.1mm</p>
            <p>Width: 75.9mm</p>
            <p className="mb-1">Thickness: 8.6mm</p>
            <p className="font-semibold">Weight: 205g</p>
            <p className="max-w-2xl">
              *Data regarding dimension and weight tested internally at Xiaomi
              labs, actual results may be slightly different according to
              different measurement methods.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Xiaomi12TPro;
