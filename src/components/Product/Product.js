import styles from "./Product.module.css";

function Product({ name, price }) {
  return (
    <div className={styles.product}>
      <h2 className={styles.h2}>{name}</h2>
      <p className={styles.p}>Price:${price}</p>
      <button className={styles.btn}>Add to Cart</button>
    </div>
  );
}
export default Product;
