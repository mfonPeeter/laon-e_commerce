import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TiTick } from 'react-icons/ti';

import { commerce } from '../../lib/commerce';

import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import LoadingSpinner from '../../ui/LoadingSpinner';

import CartContext from '../../store/cart-context';

const steps = ['Shipping address', 'Payment details'];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const [redirectTimeout, setRedirectTimeout] = useState(null);
  const [redirectMessage, setRedirectMessage] = useState('');

  const navigate = useNavigate();

  const cartCtx = useContext(CartContext);

  useEffect(() => {
    const generateToken = async () => {
      try {
        if (!cartCtx.cart.id) return;
        const token = await commerce.checkout.generateToken(cartCtx.cart.id, {
          type: 'cart',
        });

        setCheckoutToken(token);
      } catch (error) {
        setRedirectMessage('Redirecting to cart...');
        setRedirectTimeout(
          setTimeout(() => {
            navigate('/cart');
          }, 5000)
        );
      }
    };

    generateToken();
  }, [cartCtx.cart.id, navigate]);

  const nextStep = () => setActiveStep(prevActiveStep => prevActiveStep + 1);
  const backStep = () => setActiveStep(prevActiveStep => prevActiveStep - 1);

  const next = data => {
    setShippingData(data);

    nextStep();
  };

  let Confirmation = () =>
    cartCtx.order.customer ? (
      <div className="px-8">
        <h5 className="mb-4 text-lg">
          Thank you for your purchase, {cartCtx.order.customer.firstname}{' '}
          {cartCtx.order.customer.lastname}. Please check the spam folder in
          your mail for your receipt.
        </h5>
        <hr />
        <p className="mt-4">Order ref: {cartCtx.order.customer_reference}</p>
        <br />
        <div className="flex items-center justify-between">
          <Link
            to="/home"
            className="px-4 py-2 uppercase border rounded transition-colors outline-blue-900 hover:bg-gray-100"
          >
            Back to Home
          </Link>
          <p>{redirectMessage}</p>
        </div>
      </div>
    ) : (
      <LoadingSpinner />
    );

  if (cartCtx.errorMessage) {
    Confirmation = () => (
      <div className="px-8">
        <h5>Error: {cartCtx.errorMessage}</h5>
        <br />
        <Link
          to="/cart"
          onClick={() => clearTimeout(redirectTimeout)}
          className="px-4 py-2 uppercase border rounded transition-colors outline-blue-900 hover:bg-gray-100"
        >
          Back to Cart
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
