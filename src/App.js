import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import Layout from './components/Layout/Layout';

import CartProvider from './store/CartProvider';
import Xiaomi12TPro from './components/ProductsSpecs/Xiaomi12TPro';

function App() {
  return (
    <CartProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/products/*" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/products-specs" element={<Xiaomi12TPro />} />
        </Routes>
      </Layout>
    </CartProvider>
  );
}

export default App;
