import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import laonLogo from '../../assets/laon-top-logo.png';
import SmallLoadingSpinner from '../../ui/SmallLoadingSpinner';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const switchAuthModeHandler = () => {
    setIsLogin(prevState => !prevState);
  };

  const onSubmit = async data => {
    const { email, password } = data;

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDOuliHGNkGaDF7oF2cPQchxui_Cu5wdUM';
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDOuliHGNkGaDF7oF2cPQchxui_Cu5wdUM';
    }

    try {
      const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setIsLoading(false);

      if (!res.ok) {
        const data = await res.json();
        setErrorMessage('Authentication failed');
        if (data && data.error && data.error.message) {
          throw new Error(data.error.message);
        }
      }

      const data = await res.json();
      authCtx.login(data.idToken);

      setErrorMessage('');

      navigate('/', { replace: true });
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="container mx-auto my-20">
      <div className="flex justify-center mb-4">
        <img
          src={laonLogo}
          alt="Laon Top Logo"
          id="laon-top-logo"
          className="w-16"
        />
      </div>
      <h3 className="mb-6 text-center text-2xl font-semibold">
        {isLogin ? 'Login' : 'Sign Up'}
      </h3>

      {errorMessage && (
        <p className="mb-4 text-red-500 text-center">Error: {errorMessage}</p>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center space-y-6 mb-6 text-center"
      >
        <div className="auth-form-input-container">
          <input
            type="text"
            placeholder="E-mail"
            className={`auth-form-input ${
              errors.email ? 'auth-form-input-error' : 'auth-form-input-correct'
            }`}
            {...register('email', {
              required: 'Enter your e-mail',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Enter a valid e-mail address',
              },
            })}
          />
          {errors.email && (
            <span className="self-start ml-2 text-red-500 text-sm">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="auth-form-input-container">
          <input
            type="password"
            placeholder="Password"
            className={`auth-form-input ${
              errors.password
                ? 'auth-form-input-error'
                : 'auth-form-input-correct'
            }`}
            {...register('password', { required: 'Enter your password' })}
          />
          {errors.password && (
            <span className="self-start ml-2 text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
        </div>

        {!isLoading && (
          <button className="auth-btn py-3 w-3/4 text-lg md:w-1/2 lg:w-1/3">
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        )}
        {isLoading && <SmallLoadingSpinner />}
      </form>

      <div className="flex justify-center mb-4">
        <button
          onClick={switchAuthModeHandler}
          className="p-1 text-lg transition-colors outline-blue-800 hover:text-blue-800"
        >
          {isLogin ? 'Create new account' : 'Login with existing account'}
        </button>
      </div>

      <div className="flex items-center justify-center cursor-default">
        <h3 className="text-blue-700 font-bold text-2xl">Laon</h3>
        <img
          src={laonLogo}
          alt="Laon Top Logo"
          id="laon-top-logo"
          className="w-5 h-5"
        />
      </div>
    </div>
  );
};

export default AuthForm;
