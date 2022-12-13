import Checkout from '../components/CheckoutForm/Checkout';

const CheckoutPage = ({ cart, order, onCaptureCheckout, error }) => {
  return (
    <Checkout
      cart={cart}
      order={order}
      onCaptureCheckout={onCaptureCheckout}
      error={error}
    />
  );
};

export default CheckoutPage;
