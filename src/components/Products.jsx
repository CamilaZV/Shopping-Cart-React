import { useCart } from '../hooks/useCart.js';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx';
import '../style/Products.css';

function Products({ products }) {
  const { cart, addToCart, removeFromCart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main className="products">
      <ul>
        {products.map((product) => {
          const isProductInCart = checkProductInCart(product);
          return (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button style={{backgroundColor: isProductInCart ? 'rgb(223, 83, 52)' : 'rgb(119, 135, 184)' }} onClick={() => isProductInCart ? removeFromCart(product) : addToCart(product)}>
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Products;
