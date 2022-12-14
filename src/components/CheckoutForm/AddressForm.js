import { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { commerce } from '../../lib/commerce';

import FormInput from './FormInput';

const AddressForm = ({ checkoutToken, next }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');

  const methods = useForm();
  const {
    formState: { errors },
  } = methods;

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));

  const subdivisions = Object.entries(shippingSubdivisions).map(
    ([code, name]) => ({ id: code, label: name })
  );

  const options = shippingOptions.map(sO => {
    const { formatted_with_symbol: formattedWithSymbol } = sO.price;
    return { id: sO.id, label: `${sO.description} - (${formattedWithSymbol})` };
  });

  const fetchShippingCountries = async checkoutTokenId => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchShippingSubdivisions = async countryCode => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );

    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    region = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region }
    );

    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  const onSubmit = data =>
    next({
      ...data,
      shippingCountry,
      shippingSubdivision,
      shippingOption,
      shippingSubdivisions,
      shippingOptions,
    });

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, [checkoutToken.id]);

  useEffect(() => {
    if (shippingCountry) fetchShippingSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision)
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      );
    // eslint-disable-next-line
  }, [shippingSubdivision]);

  return (
    <div className="px-8">
      <h3 className="mb-8 text-xl text-gray-800">Shipping Address</h3>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-y-10 gap-x-8 mb-6 sm:grid-cols-2">
            <div>
              <FormInput
                placeholder="First name"
                registeredText="firstName"
                required="Enter your firstname"
              />
              {errors.firstName && (
                <span className="text-red-500 text-sm">
                  {errors.firstName.message}
                </span>
              )}
            </div>
            <div>
              <FormInput
                placeholder="Last name"
                registeredText="lastName"
                required="Enter your lastname"
              />
              {errors.lastName && (
                <span className="text-red-500 text-sm">
                  {errors.lastName.message}
                </span>
              )}
            </div>
            <div>
              <FormInput
                placeholder="Address"
                registeredText="address"
                required="Enter your address"
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
              <select
                value={shippingCountry}
                onChange={e => setShippingCountry(e.target.value)}
                required
                className="select"
              >
                {countries.map(country => (
                  <option key={country.id} value={country.id}>
                    {country.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-gray-500">Shipping Subdivisions</label>
              <select
                value={shippingSubdivision}
                onChange={e => setShippingSubdivision(e.target.value)}
                required
                className="select"
              >
                {subdivisions.map(subdivision => (
                  <option key={subdivision.id} value={subdivision.id}>
                    {subdivision.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-gray-500">Shipping Options</label>
              <select
                value={shippingOption}
                onChange={e => setShippingOption(e.target.value)}
                required
                className="select"
              >
                {options.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <br />
          <div className="mb-4 text-sm font-bold">
            <p>
              Please ensure that information provided is correct as wrong
              information will result in an incomplete transaction.
            </p>
            <p>Note: Shipping Options for the United States is Domestic.</p>
          </div>
          <div className="flex justify-between">
            <Link
              to="/cart"
              className="px-4 py-2 uppercase border rounded transition-colors outline-blue-900 hover:bg-gray-100"
            >
              Back to cart
            </Link>
            <button type="submit" className="checkout-btn px-5 py-2 uppercase">
              Next
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddressForm;
