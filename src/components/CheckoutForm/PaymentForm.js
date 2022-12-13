import {
  Elements,
  ElementsConsumer,
  CardElement,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Review from './Review';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({
  checkoutToken,
  shippingData,
  backStep,
  nextStep,
  onCaptureCheckout,
}) => {
  const {
    line_items: lineItems,
    subtotal: { formatted_with_symbol: formattedWithSymbol },
  } = checkoutToken;

  console.log(shippingData);

  const handleSubmit = async (event, stripe, elements) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    console.log(paymentMethod);
    console.log(error);

    if (error) {
      console.log(error);
    } else {
      const orderData = {
        line_items: lineItems,
        customer: {
          firstname: shippingData.firstName,
          lastname: shippingData.lastName,
          email: shippingData.email,
        },
        shipping: {
          name: 'Primary',
          street: shippingData.address,
          town_city: shippingData.city,
          county_state: shippingData.shippingSubdivision,
          postal_zip_code: shippingData.zip,
          country: shippingData.shippingCountry,
        },
        fulfillment: { shipping_method: shippingData.shippingOption },
        payment: {
          gateway: 'stripe',
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };

      if (!orderData.shipping.postal_zip_code) return;

      onCaptureCheckout(checkoutToken.id, orderData);

      nextStep();
    }
  };

  return (
    <div className="px-8">
      <Review checkoutToken={checkoutToken} />
      <hr />
      <h3 className="mb-4 mt-4 text-xl text-gray-800">Payment method</h3>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ stripe, elements }) => (
            <form onSubmit={e => handleSubmit(e, stripe, elements)}>
              <p className="mb-8 text-sm">
                Type <span className="font-bold">424242...</span> consistently
                as the test numbers for the card details below
              </p>
              <CardElement />
              <br /> <br />
              <div className="flex justify-between">
                <button
                  onClick={backStep}
                  className="px-4 py-2 uppercase border rounded transition-colors outline-blue-900 hover:bg-gray-100"
                >
                  Back
                </button>
                <button
                  disabled={!stripe}
                  className="checkout-btn px-5 py-2 uppercase"
                >
                  Pay {formattedWithSymbol}
                </button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </div>
  );
};

export default PaymentForm;
