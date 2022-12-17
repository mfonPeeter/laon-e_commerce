import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AuthPage from './pages/AuthPage';
import Layout from './components/Layout/Layout';
import ProductsSpecs from './components/Products/ProductsSpecs';

import CartProvider from './store/CartProvider';

function App() {
  return (
    <CartProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/products/*" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductsSpecs />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </Layout>
    </CartProvider>
  );
}

export default App;
