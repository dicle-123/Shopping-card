import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

function Navbar() {
  const { cartItemCount } = useContext(CartContext);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/shop" className={styles.navLink}>
            Shop
          </Link>
        </li>
        <li className={styles.navItem}>
          <span className={styles.cartInfo}>Cart ({cartItemCount})</span>
        </li>

        <li className={styles.navItem}>
          <Link to="/cart" className={styles.navLink}>
            Go To Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
