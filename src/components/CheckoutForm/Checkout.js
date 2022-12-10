import { useEffect, useState } from 'react';
import { TiTick } from 'react-icons/ti';

import { commerce } from '../../lib/commerce';

import LoadingSpinner from '../../ui/LoadingSpinner';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';

const steps = ['Shipping address', 'Payment details'];

const Checkout = ({ cart }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: 'cart',
        });

        console.log(token);

        setCheckoutToken(token);
      } catch (error) {}
    };

    generateToken();
  }, []);

  const nextStep = () => setActiveStep(prevActiveStep => prevActiveStep + 1);
  const backStep = () => setActiveStep(prevActiveStep => prevActiveStep - 1);

  const next = data => {
    setShippingData(data);

    nextStep();
  };

  console.log(shippingData);

  const Confirmation = () => <div>Confirmation</div>;

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm shippingData={shippingData} />
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

/* <div className="flex justify-between">
<button
  onClick={() => {
    setActiveStep(prevStep => prevStep - 1);
  }}
  className="px-4 py-2 uppercase rounded transition-colors outline-blue-900 hover:bg-gray-100"
>
  Back
</button>
<button
  onClick={() => {
    setActiveStep(prevStep => prevStep + 1);
  }}
  className="checkout-btn px-5 py-2 uppercase"
>
  Next
</button>
</div> */
