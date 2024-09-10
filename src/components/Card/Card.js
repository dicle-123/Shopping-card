import styles from "./Card.module.css";
import Navbar from "../Navbar/Navbar";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import Product from "../Product/Product";

function Cart() {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      <Navbar />
      <div className={styles.cart}>
        <h2>Your Cart</h2>
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity} x ${item.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>No items in your cart</p>
        )}
      </div>
    </div>
  );
}

export default Cart;
