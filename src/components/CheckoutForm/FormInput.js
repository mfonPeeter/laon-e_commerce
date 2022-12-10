import { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';

const FormInput = ({
  placeholder,
  registeredText,
  required,
  value,
  message,
}) => {
  const { register } = useFormContext();

  return (
    <Fragment>
      <input
        type="text"
        defaultValue=""
        placeholder={placeholder}
        {...register(`${registeredText}`, {
          required: required,
          pattern: { value: value, message: message },
        })}
        className="w-full text-lg border-b border-gray-500 outline-none transition-all placeholder-gray-500 hover:border-black focus:border-blue-700"
      />
    </Fragment>
  );
};

export default FormInput;
