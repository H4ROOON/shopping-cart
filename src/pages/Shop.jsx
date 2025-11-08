import { useEffect, useState } from "react";

function Shop() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

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
  }

  function handleDecrease(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && (item.quantity ?? 1) > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  function handleInputChange(id, value) {
    const num = Number(value);
    if (num >= 1) {
      setItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity: num } : item))
      );
    }
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
              <button onClick={() => handleDeacrease(item.id)}>-</button>
              <input
                type="number"
                value={item.quantity ?? 1}
                onchange={(e) => handleInputChange(item.id, e.target.value)}
              ></input>
              <button onClick={() => handleIncrease(item.id)}>+</button>
            </div>
            <button className="add-btn">Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
