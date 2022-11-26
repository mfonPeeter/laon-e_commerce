import { useState, useEffect, useCallback } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { commerce } from './lib/commerce';

import HomePage from './pages/HomePage';
import Layout from './components/Layout/Layout';
import ProductsPage from './pages/ProductsPage';

function App() {
  const [products, setProducts] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [disableDecreaseButton, setDisableDecreaseButton] = useState(true);
  const [disableIncreaseButton, setDisableIncreaseButton] = useState(false);

  const fetchProducts = useCallback(async () => {
    const { data } = await commerce.products.list({
      limit: 20,
      page: pageNo,
    });

    setProducts(data);
  }, [pageNo]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const decreasePageNoHandler = () => {
    setPageNo(prevPage => --prevPage);
    setDisableDecreaseButton(prevVal => !prevVal);
    setDisableIncreaseButton(prevVal => !prevVal);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const increasePageNoHandler = () => {
    setPageNo(prevPage => ++prevPage);
    setDisableDecreaseButton(prevVal => !prevVal);
    setDisableIncreaseButton(prevVal => !prevVal);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/products"
          element={
            <ProductsPage
              products={products}
              decreasePageNoHandler={decreasePageNoHandler}
              increasePageNoHandler={increasePageNoHandler}
              disableDecreaseButton={disableDecreaseButton}
              disableIncreaseButton={disableIncreaseButton}
            />
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
