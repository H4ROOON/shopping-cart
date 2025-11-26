import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Premium Shopping Experience</h1>
      <p className="home-subtitle">Find your perfect products with ease.</p>

      <Link to="/shop" className="start-btn">
        Start Shopping →
      </Link>
    </div>
  );
}
export default Home;
