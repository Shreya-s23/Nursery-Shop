import { Link } from "react-router-dom";

const Header = ({ cartCount }) => (
  <header className="header">
    <h1>Paradise Nursery</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">🛒 Cart ({cartCount})</Link>
    </nav>
  </header>
);

export default Header;

