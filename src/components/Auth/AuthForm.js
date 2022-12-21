import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import laonLogo from '../../assets/laon-logo.png';
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
      // Construct a new date object in milliseconds
      // Adding expires time in milliseconds to timestamp in milliseconds
      const expirationTime = new Date(
        new Date().getTime() + +data.expiresIn * 1000
      );
      authCtx.login(data.idToken, expirationTime.toISOString());

      setErrorMessage('');

      navigate('/', { replace: true });
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="container mx-auto my-28">
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

      <div className="flex justify-center mb-6">
        <button
          onClick={switchAuthModeHandler}
          className="p-1 text-lg transition-colors outline-blue-800 hover:text-blue-800"
        >
          {isLogin ? 'Create new account' : 'Login with existing account'}
        </button>
      </div>

      <div className="flex items-center justify-center cursor-default">
        <img src={laonLogo} alt="Laon Logo" className="w-20 h-20" />
      </div>
    </div>
  );
};

export default AuthForm;
