import '../style/Cart.css';
import { useId } from 'react';
import { CartIcon, ClearCartIcon } from './Icons.jsx';
import { useCart } from '../hooks/useCart.js';

function CartItem({ image, price, title, quantity, addToCart, reduceToCart }) {
  return (
    <li>
      <img src={image} alt={title} />
      <div>
        ${price} x {quantity} = ${price * quantity}
      </div>
      <div>
        <button onClick={reduceToCart} style={{background: 'rgb(201 98 75)'}} className='add-button'>-</button>
        <button onClick={addToCart} style={{background: 'rgb(119, 135, 184)'}} className='add-button'>+</button>
      </div>
    </li>
  );
}

function Cart() {
  const cartCheckBoxId = useId();

  const { cart, clearCart, addToCart, reduceToCart } = useCart();

  return (
    <>
      <label htmlFor={cartCheckBoxId} className="cart-button">
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckBoxId} hidden />

      <aside className="cart">
        <button onClick={clearCart} style={{background: 'rgb(201 98 75)', position: 'fixed', top: 20, right: 40, borderRadius: 100}}>
          <ClearCartIcon />
        </button>

        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
              reduceToCart={() => reduceToCart(product)}
            />
          ))}
        </ul>
      </aside>
    </>
  );
}

export default Cart;
