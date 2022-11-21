import { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';

// import HomePage from './pages/HomePage';
import Layout from './components/Layout/Layout';
import ProductsPage from './pages/ProductsPage';

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Layout>
      {/* <HomePage /> */}
      <ProductsPage products={products} />
    </Layout>
  );
}

export default App;
