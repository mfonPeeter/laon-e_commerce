import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TiTick } from 'react-icons/ti';

import { commerce } from '../../lib/commerce';

import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import LoadingSpinner from '../../ui/LoadingSpinner';

const steps = ['Shipping address', 'Payment details'];

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});

  useEffect(() => {
    const generateToken = async () => {
      try {
        if (!cart.id) return;
        const token = await commerce.checkout.generateToken(cart.id, {
          type: 'cart',
        });

        console.log(token);

        setCheckoutToken(token);
      } catch (error) {
        console.log(error);
      }
    };

    generateToken();
  }, [cart.id]);

  const nextStep = () => setActiveStep(prevActiveStep => prevActiveStep + 1);
  const backStep = () => setActiveStep(prevActiveStep => prevActiveStep - 1);

  const next = data => {
    setShippingData(data);

    nextStep();
  };

  let Confirmation = () =>
    order.customer ? (
      <div className="px-8">
        <h5 className="mb-4 text-lg">
          Thank you for your purchase, {order.customer.firstname}{' '}
          {order.customer.lastname}. Please check the spam folder in your mail
          for your receipt.
        </h5>
        <hr />
        <p className="mt-4">Order ref: {order.customer_reference}</p>
        <br />
        <Link
          to="/home"
          className="px-4 py-2 uppercase border rounded transition-colors outline-blue-900 hover:bg-gray-100"
        >
          Back to Home
        </Link>
      </div>
    ) : (
      <LoadingSpinner />
    );

  if (error) {
    Confirmation = () => (
      <div className="px-8">
        <h5>Error: {error}</h5>
        <br />
        <Link
          to="/home"
          className="px-4 py-2 uppercase border rounded transition-colors outline-blue-900 hover:bg-gray-100"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        checkoutToken={checkoutToken}
        shippingData={shippingData}
        backStep={backStep}
        nextStep={nextStep}
        onCaptureCheckout={onCaptureCheckout}
      />
    );

  return (
    <div className="container mx-auto max-w-2xl my-16 mb-20 px-4 font-lora">
      <div className="bg-white py-6 rounded shadow-md">
        <h2 className="text-4xl text-center mb-4">Checkout</h2>
        <div className="flex justify-between mb-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`text-gray-400 step-item ${
                (activeStep === i || i < activeStep) && 'active'
              }`}
            >
              <div className="step">
                {i < activeStep ? <TiTick size={24} /> : i + 1}
              </div>
              <p
                className={`${
                  (activeStep === i || i < activeStep) && 'text-gray-800'
                }`}
              >
                {step}
              </p>
            </div>
          ))}
        </div>

        {activeStep === steps.length ? (
          <Confirmation />
        ) : checkoutToken ? (
          <Form />
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </div>
  );
};

export default Checkout;
