import { useContext } from "react"; // 1. Import the hook
import { CartContext } from "../context/CartContext";
function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);
  if (cart.length === 0) return <h1>Cart is Empty!</h1>;

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <h3>{item.title}</h3>
          <p>${item.price}</p>

          <div className="controls">
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <span>Quantity: {item.quantity}</span>
            <button onClick={() => increaseQuantity(item.id)}>+</button>
          </div>

          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
export default Cart;
