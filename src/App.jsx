//import products from './mocks/products.json';
import { useEffect, useState } from 'react';
import { Products } from './components/Products.jsx';
import { Cart } from './components/Cart.jsx';
import { Navbar } from './components/Navbar.jsx';
import { useFilters } from './hooks/useFilters.js';
import { CartProvider } from './context/cart.jsx';
import { Route, Routes } from 'react-router-dom';

export function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    getData();
  }, []);

  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <CartProvider>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Products products={filteredProducts} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </CartProvider>
  );
}
