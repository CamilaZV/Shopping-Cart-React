//import products from './mocks/products.json';
import Products from './components/Products.jsx';
import Header from './components/Header.jsx';
import { useFilters } from './hooks/useFilters.js';
import { CartProvider } from './context/cart.jsx';
import { useEffect, useState } from 'react';


function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
        const response =  await fetch('https://fakestoreapi.com/products')
        const data = await response.json()  
        setProducts(data);
    };
    getData();
  }, []);

  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <CartProvider>
      <Header />
      <Products products={filteredProducts} />
    </CartProvider>
  );
}

export default App;
