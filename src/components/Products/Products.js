import Product from './Product';

import img1 from '../../assets/all-products-page/redmi-phones/Redmi 9.webp';
import img2 from '../../assets/all-products-page/redmi-phones/Redmi 9A.webp';
import img3 from '../../assets/all-products-page/redmi-phones/Redmi 9C.webp';
import img4 from '../../assets/all-products-page/redmi-phones/Redmi 9T.jpg';
import img5 from '../../assets/all-products-page/redmi-phones/Redmi 10.webp';
import img6 from '../../assets/all-products-page/redmi-phones/Redmi Note 9.webp';
import img7 from '../../assets/all-products-page/redmi-phones/Redmi Note 10 5G.jpg';
import img8 from '../../assets/all-products-page/redmi-phones/Redmi Note 10.webp';
import img9 from '../../assets/all-products-page/redmi-phones/Redmi Note 10S.webp';
import img10 from '../../assets/all-products-page/redmi-phones/Redmi Note 11 Pro.webp';

const products = [
  { id: 1, image: img1, title: 'Xiaomi 12T Pro' },
  { id: 2, image: img2, title: 'Xiaomi 12 Pro' },
  { id: 3, image: img3, title: 'Redmi Note 11 Pro' },
  { id: 4, image: img4, title: 'Redmi Note 11' },
  { id: 5, image: img5, title: 'Redmi Note 10S' },
  { id: 6, image: img6, title: 'Redmi Note 10 Pro' },
  { id: 7, image: img7, title: 'Xiaomi 12 Pro' },
  { id: 8, image: img8, title: 'Mi 10T' },
  { id: 9, image: img9, title: 'Mi 10 Lite' },
  { id: 10, image: img10, title: 'Mi Note 10 Pro' },
];

const Products = () => {
  return (
    <main className="grid grid-cols-2 gap-2 px-2 py-4 sm:grid-cols-3 md:px-3 md:grid-cols-4 lg:px-4 lg:grid-cols-5">
      {products.map(product => (
        <div key={product.id} className="grid grid-flow-row auto-rows-fr">
          <Product product={product} />
        </div>
      ))}
    </main>
  );
};

export default Products;
