import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import styles from "./Product.module.css";

function Product({ id, name, price, image }) {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useContext(CartContext);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({ name, price, quantity });
  };
  return (
    <div className={styles.product}>
      <img src={image} alt={name} className={styles.productImage} />
      <h2 className={styles.h2}>{name}</h2>

      <p className={styles.p}>Price: ${price}</p>
      <div className={styles.controls}>
        <button className={styles.btn} onClick={handleDecrement}>
          -
        </button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <buntton className={styles.btn} onClick={handleIncrement}>
          +
        </buntton>
      </div>
      <button className={styles.addToCart} onClick={handleAddToCart}>
        Add To Cart
      </button>
    </div>
  );
}

export default Product;
