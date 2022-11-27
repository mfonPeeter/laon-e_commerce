import { useState, useEffect, useCallback, useRef } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { commerce } from './lib/commerce';

import HomePage from './pages/HomePage';
import Layout from './components/Layout/Layout';
import ProductsPage from './pages/ProductsPage';

function App() {
  const [products, setProducts] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [disableDecreaseButton, setDisableDecreaseButton] = useState(true);
  const [disableIncreaseButton, setDisableIncreaseButton] = useState(false);

  const totalPage = useRef();

  const location = useLocation();

  const fetchProducts = useCallback(async () => {
    const response = await commerce.products.list({
      limit: 20,
      page: pageNo,
    });

    const { data } = response;
    const { total_pages: totalPages } = response.meta.pagination;

    totalPage.current = totalPages;

    setProducts(data);
  }, [pageNo]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const decreasePageNoHandler = useCallback(() => {
    if (pageNo === 1) return;
    setPageNo(prevPage => --prevPage);
    setDisableDecreaseButton(true);
    setDisableIncreaseButton(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pageNo]);

  const increasePageNoHandler = useCallback(() => {
    if (pageNo >= totalPage.current) return;
    setPageNo(prevPage => ++prevPage);
    setDisableDecreaseButton(false);
    setDisableIncreaseButton(true);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pageNo]);

  useEffect(() => {
    if (location.search === '') decreasePageNoHandler();
    if (location.search === '?page=2') increasePageNoHandler();
  }, [location.search, decreasePageNoHandler, increasePageNoHandler]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/products/*"
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
