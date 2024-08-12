import Cart from "../Card/Card";
import Product from "../Product/Product";
import styles from "./ShopPage.module.css";

function ShopPage() {
  return (
    <div>
      <div className={styles.shopContainer}>
        <h1 className={styles.h1}>Products</h1>
        <div className={styles.products}>
          <Product name="product-1" price={99.99}></Product>
          <Product name="product-2" price={105.77}></Product>
        </div>
        <Cart></Cart>
      </div>
    </div>
  );
}

export default ShopPage;
