import { useForm, FormProvider } from 'react-hook-form';

import FormInput from './FormInput';

const AddressForm = () => {
  const methods = useForm();
  const {
    formState: { errors },
  } = methods;
  const onSubmit = data => console.log(data);

  return (
    <div className="px-8">
      <h3 className="mb-8 text-xl text-gray-800">Shipping Address</h3>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-y-10 gap-x-8 mb-6 sm:grid-cols-2">
            <div>
              <FormInput
                placeholder="First name"
                registeredText="firstname"
                required="Enter your firstname"
                value={/^[A-Za-z]+$/}
                message="Name should not contain numbers"
              />
              {errors.firstname && (
                <span className="text-red-500 text-sm">
                  {errors.firstname.message}
                </span>
              )}
            </div>
            <div>
              <FormInput
                placeholder="Last name"
                registeredText="lastname"
                required="Enter your lastname"
                value={/^[A-Za-z]+$/}
                message="Name should not contain numbers"
              />
              {errors.lastname && (
                <span className="text-red-500 text-sm">
                  {errors.lastname.message}
                </span>
              )}
            </div>
            <div>
              <FormInput
                placeholder="Address"
                registeredText="address"
                required="Enter your email address"
              />
              {errors.address && (
                <span className="text-red-500 text-sm">
                  {errors.address.message}
                </span>
              )}
            </div>
            <div>
              <FormInput
                placeholder="E-mail"
                registeredText="email"
                required="Enter your e-mail"
                value={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i}
                message="Enter a valid e-mail address"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div>
              <FormInput
                placeholder="City"
                registeredText="city"
                required="Enter your city"
                value={/^[A-Za-z]+$/}
                message="City should not contain numbers"
              />
              {errors.city && (
                <span className="text-red-500 text-sm">
                  {errors.city.message}
                </span>
              )}
            </div>
            <div>
              <FormInput
                placeholder="ZIP/Postal Code"
                registeredText="zip"
                required="Enter your zip/postal code"
                value={/^[0-9]+$/}
                message="Zip/Postal code should not contain letters"
              />
              {errors.zip && (
                <span className="text-red-500 text-sm">
                  {errors.zip.message}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
            <div>
              <label className="text-gray-500">Shipping Country</label>
              <select className="select">
                <option>Select Me</option>
              </select>
            </div>

            <div>
              <label className="text-gray-500">Shipping Subdivisions</label>
              <select className="select">
                <option>Select Me</option>
              </select>
            </div>

            <div>
              <label className="text-gray-500">Shipping Options</label>
              <select className="select">
                <option>Select Me</option>
              </select>
            </div>
          </div>

          <button type="submit" className="checkout-btn px-5 py-2 uppercase">
            Next
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddressForm;
