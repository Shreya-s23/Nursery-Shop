import { Link } from "react-router-dom";

const LandingPage = () => (
  <div className="landing">
    <h1>Welcome to Paradise Nursery</h1>
    <p>Your one-stop shop for beautiful, healthy houseplants!</p>
    <Link to="/products"><button>Get Started</button></Link>
  </div>
);

export default LandingPage;
