import React, { Suspense } from 'react';
import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import ProductsSpecs from './components/Products/ProductsSpecs';
import LoadingSpinner from './components/UI/LoadingSpinner';

import CartProvider from './store/CartProvider';
import AuthContext from './store/auth-context';

import HomePage from './pages/HomePage';

const ProductsPage = React.lazy(() => import('./pages/ProductsPage'));
const CartPage = React.lazy(() => import('./pages/CartPage'));
const CheckoutPage = React.lazy(() => import('./pages/CheckoutPage'));
const AuthPage = React.lazy(() => import('./pages/AuthPage'));

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <CartProvider>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/*" element={<ProductsPage />} />
            <Route path="/products/:productId" element={<ProductsSpecs />} />
            <Route path="/cart" element={<CartPage />} />
            {!authCtx.isLoggedIn && (
              <Route path="/auth" element={<AuthPage />} />
            )}
            <Route
              path="/checkout"
              element={
                authCtx.isLoggedIn ? (
                  <CheckoutPage />
                ) : (
                  <Navigate to="/auth" replace={true} />
                )
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Layout>
    </CartProvider>
  );
}

export default App;
