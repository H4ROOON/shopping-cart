import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

function Shop() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantities, setQuantities] = useState({});
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    async function getItems() {
      const res = await fetch("https://fakestoreapi.com/products?limit=10");
      const data = await res.json();
      setItems(data);
      setLoading(false);
    }
    getItems();
  }, []);

  // -------------- SKELETON LOADER -----------------
  if (loading)
    return (
      <div className="shop-grid">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="skeleton-card">
            <div className="skeleton-img"></div>
            <div className="skeleton-line short"></div>
            <div className="skeleton-line"></div>
            <div className="skeleton-line"></div>
          </div>
        ))}
      </div>
    );
  // -------------------------------------------------

  function handleIncrease(id) {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  }

  function handleDecrease(id) {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  }

  function handleChange(id, value) {
    const num = parseInt(value) || 1;
    setQuantities((prev) => ({ ...prev, [id]: num }));
  }

  function handleAddToCart(item) {
    const qty = quantities[item.id] || 1;

    const exists = cart.find((p) => p.id === item.id);

    if (exists) {
      setCart(
        cart.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + qty } : p
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: qty }]);
    }
  }

  return (
    <div className="shop-container">
      <h1 className="shop-title">Shop Products</h1>

      <div className="shop-grid">
        {items.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.title} />

            <h3 className="product-title">{item.title}</h3>
            <p className="price">${item.price}</p>

            <div className="quantity-controls">
              <button onClick={() => handleDecrease(item.id)}>-</button>

              <input
                type="number"
                value={quantities[item.id] || 1}
                onChange={(e) => handleChange(item.id, e.target.value)}
              />

              <button onClick={() => handleIncrease(item.id)}>+</button>
            </div>

            <button className="add-btn" onClick={() => handleAddToCart(item)}>
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
