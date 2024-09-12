import styles from "./Card.module.css";
import Navbar from "../Navbar/Navbar";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

function Cart() {
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <div>
      <Navbar />
      <div className={styles.cart}>
        <h2 className={styles.h2}>
          Your Cart {totalItems > 0 && `(${totalItems} items)`}
        </h2>
        {cartItems.length > 0 ? (
          <ul className={styles.ul}>
            {cartItems.map((item, index) => (
              <li key={item.id} className={styles.listItem}>
                {item.name} - {item.quantity} x ${item.price}
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.p}>No items in your cart</p>
        )}
      </div>
    </div>
  );
}

export default Cart;
