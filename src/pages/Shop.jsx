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

  if (loading) return <p>Loading Products...</p>;
  function handleIncrease(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity ?? 1) + 1 } : item
      )
    );
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  }

  function handleDecrease(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && (item.quantity ?? 1) > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
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

    // Check if item already in cart
    const exists = cart.find((p) => p.id === item.id);

    if (exists) {
      // Update quantity of existing item
      setCart(
        cart.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + qty } : p
        )
      );
    } else {
      // Add new item
      setCart([...cart, { ...item, quantity: qty }]);
    }

    // Optional: Alert user
    alert(`Added ${qty} x ${item.title} to cart!`);
  }
  return (
    <div>
      <h1>Shop</h1>
      <div className="shop-grid">
        {items.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
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
