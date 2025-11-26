import { useContext } from "react";
import { CartContext } from "../context/CartContext";
function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

  if (cart.length === 0)
    return <h1 className="empty-cart">Your Cart is Empty</h1>;

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} className="cart-img" />

          <div className="cart-info">
            <h3>{item.title}</h3>
            <p>${item.price}</p>

            <div className="controls">
              {/* Fixed: using decreaseQuantity instead of decreaseQty */}
              <button onClick={() => decreaseQuantity(item.id)}>-</button>

              <span className="cart-qty">{item.quantity}</span>

              {/* Fixed: using increaseQuantity instead of increaseQty */}
              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="remove-btn"
          >
            Remove
          </button>
        </div>
      ))}

      {/* Optional: Add a total price section at the bottom */}
      <div className="cart-total">
        <h2>
          Total: $
          {cart
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)}
        </h2>
      </div>
    </div>
  );
}
export default Cart;
