import { useCart } from '../hooks/useCart.js';
import { Filters } from './Filters.jsx';

export function Products({ products }) {
  const { cart, addToCart, removeFromCart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <>
      <Filters />
      <div className="d-flex flex-wrap justify-content-evenly">
        {products.map((product) => {
          const isProductInCart = checkProductInCart(product);
          return (
            <div key={product.id}>
              <div className="card product text-start shadow">
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img-top image "
                />
                <div className="card-body d-inline-grid ">
                  <h5 className="card-title text-justify">{product.title}</h5>
                  <p className="card-text text-center">${product.price}</p>
                  <div className="d-flex justify-content-center">
                    <button
                      style={{
                        backgroundColor: isProductInCart
                          ? 'rgb(223, 83, 52)'
                          : 'rgb(119, 135, 184)',
                      }}
                      onClick={() =>
                        isProductInCart
                          ? removeFromCart(product)
                          : addToCart(product)
                      }
                      className="btn"
                    >
                      {isProductInCart ? (
                        <img
                          src="node_modules/bootstrap-icons/icons/cart-x.svg"
                          alt="remove-from-cart"
                          width="24"
                          height="24"
                        />
                      ) : (
                        <img
                          src="node_modules/bootstrap-icons/icons/cart-plus.svg"
                          alt="add-to-cart"
                          width="24"
                          height="24"
                        />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
