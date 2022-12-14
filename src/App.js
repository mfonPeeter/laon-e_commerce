import { useState, useEffect, useCallback } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { commerce } from './lib/commerce';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import Layout from './components/Layout/Layout';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [disableDecreaseButton, setDisableDecreaseButton] = useState(true);
  const [disableIncreaseButton, setDisableIncreaseButton] = useState(false);

  const location = useLocation();

  const queryParams = new URLSearchParams(window.location.search);
  const page = queryParams.get('page');

  const fetchProducts = useCallback(async () => {
    try {
      const response = await commerce.products.list({
        limit: 20,
        page: pageNo,
      });

      const { data } = response;
      const { current_page: currentPage } = response.meta.pagination;

      if (!page && currentPage !== 1) return;
      if (+page && currentPage !== +page) return;

      setProducts(data);
    } catch (error) {
      setErrorMessage(
        'Error: No internet connection. Please check your internet connection.'
      );
    }
  }, [pageNo, page]);

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const addToCartHandler = async (productId, quantity) => {
    setIsLoading(true);
    const response = await commerce.cart.add(productId, quantity);

    if (response) setIsLoading(false);

    setCart(response);
  };

  const { total_items: totalItems } = cart;

  const updateCartQtyHandler = async (productId, quantity) => {
    setIsLoading(true);
    const response = await commerce.cart.update(productId, { quantity });

    if (response) setIsLoading(false);

    setCart(response);
  };

  const removeFromCartHandler = async productId => {
    setIsLoading(true);
    const response = await commerce.cart.remove(productId);

    if (response) setIsLoading(false);

    setCart(response);
  };

  const emptyCartHandler = async () => {
    setIsLoading(true);
    const response = await commerce.cart.empty();

    if (response) setIsLoading(false);

    setCart(response);
  };

  const refreshCartHandler = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const captureCheckoutHandler = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);
      refreshCartHandler();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [fetchProducts]);

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
              isLoading={isLoading}
              error={errorMessage}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              updateCartQtyHandler={updateCartQtyHandler}
              removeFromCartHandler={removeFromCartHandler}
              emptyCartHandler={emptyCartHandler}
              isLoading={isLoading}
              error={errorMessage}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <CheckoutPage
              cart={cart}
              order={order}
              onCaptureCheckout={captureCheckoutHandler}
              error={errorMessage}
            />
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
