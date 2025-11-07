import { useEffect, useState } from "react";

function Shop() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getItems() {
      const res = await fetch("https://fakestoreapi.com/products?limit=8");
      const data = await res.json();
      setItems(data);
      setLoading(false);
    }
    getItems();
  }, []);

  if (loading) return <p>Loading Products...</p>;

  return (
    <div>
      <h1>Shop</h1>
      <div className="shop-grid">
        {items.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
