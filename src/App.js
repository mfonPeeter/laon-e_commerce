import { useState, useEffect, useCallback } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { commerce } from './lib/commerce';

import HomePage from './pages/HomePage';
import Layout from './components/Layout/Layout';
import ProductsPage from './pages/ProductsPage';

function App() {
  const [products, setProducts] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [cart, setCart] = useState({});
  const [disableDecreaseButton, setDisableDecreaseButton] = useState(true);
  const [disableIncreaseButton, setDisableIncreaseButton] = useState(false);

  const location = useLocation();

  const queryParams = new URLSearchParams(window.location.search);
  const page = queryParams.get('page');

  const fetchProducts = useCallback(async () => {
    const response = await commerce.products.list({
      limit: 20,
      page: pageNo,
    });

    const { data } = response;
    const { current_page: currentPage } = response.meta.pagination;

    if (!page && currentPage !== 1) return;
    if (+page && currentPage !== +page) return;

    setProducts(data);
  }, [pageNo, page]);

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const addToCartHandler = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item);
  };

  const { total_items: totalItems } = cart;

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [fetchProducts]);

  console.log(cart);

  const decreasePageNoHandler = useCallback(() => {
    if (pageNo <= 1) return;
    setPageNo(prevPage => --prevPage);
    setDisableDecreaseButton(true);
    setDisableIncreaseButton(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pageNo]);

  const increasePageNoHandler = useCallback(() => {
    if (pageNo >= +page) return;
    setPageNo(prevPage => ++prevPage);
    setDisableDecreaseButton(false);
    setDisableIncreaseButton(true);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pageNo, page]);

  useEffect(() => {
    if (location.search === '') decreasePageNoHandler();
    if (location.search === '?page=2') increasePageNoHandler();
  }, [location.search, decreasePageNoHandler, increasePageNoHandler]);

  return (
    <Layout totalItems={totalItems}>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/products/*"
          element={
            <ProductsPage
              products={products}
              onAddToCart={addToCartHandler}
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
