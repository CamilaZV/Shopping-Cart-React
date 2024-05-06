import { useCart } from '../hooks/useCart.js';

function CartItem({ image, price, title, quantity, addToCart, reduceToCart }) {
  return (
    <div className="card product text-start shadow">
      <img src={image} alt={title} className="card-img-top image" />
      <div className="card-body d-inline-grid ">
        <h5 className="card-title text-justify">{title}</h5>
        <p className="card-text text-center">
          ${price} x {quantity} = ${(price * quantity).toFixed(2)}
        </p>

        <div className="d-flex justify-content-center align-items-center">
          <button
            onClick={reduceToCart}
            style={{ background: 'rgb(201 98 75)' }}
            className="btn m-1 "
          >
            -
          </button>

          <button
            onClick={addToCart}
            style={{ background: 'rgb(119, 135, 184)' }}
            className="btn m-1"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export function Cart() {
  const { cart, clearCart, addToCart, reduceToCart } = useCart();

  const totalPrice = cart
    .reduce((acc, product) => acc + product.price * product.quantity, 0)
    .toFixed(2);

  return (
    <>
      {cart.length > 0 ? (
        <div className="d-flex justify-content-evenly m-4">
          <img
            src="node_modules/bootstrap-icons/icons/cart-x-fill.svg"
            alt="clear-cart"
            width="50"
            height="50"
            onClick={clearCart}
            style={{ cursor: 'pointer' }}
          />
          <h2>TOTAL= ${totalPrice}</h2>
        </div>
      ) : (
        <h2 className="text-center mt-5">Cart is empty!</h2>
      )}

      <div className="d-flex flex-wrap justify-content-evenly">
        {cart.map((product) => (
          <div key={product.id}>
            <CartItem
              addToCart={() => addToCart(product)}
              reduceToCart={() => reduceToCart(product)}
              {...product}
            />
          </div>
        ))}
      </div>
    </>
  );
}
