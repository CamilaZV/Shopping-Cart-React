import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="navbar bg-secondary sticky-top p-3">
      <div className="container-fluid">
        <h1>Shopping Cart React</h1>

        <div className="d-flex ">
          <Link to="/" className="navbar-brand px-4">
            <img
              src="node_modules/bootstrap-icons/icons/shop.svg"
              alt="store"
              width="50"
              height="50"
            />
          </Link>

          <Link to="/cart" className="navbar-brand">
          <img
              src="node_modules/bootstrap-icons/icons/cart3.svg"
              alt="cart"
              width="50"
              height="50"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
