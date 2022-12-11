import Review from './Review';

const PaymentForm = ({ checkoutToken }) => {
  return (
    <div className="px-8">
      <Review checkoutToken={checkoutToken} />
    </div>
  );
};

export default PaymentForm;
