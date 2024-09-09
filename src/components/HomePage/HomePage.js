import Navbar from "../Navbar/Navbar";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.h1}>Welcome to our Store</h1>
        <p className={styles.p}>
          You can buy products with peace of mind from our quality product store
        </p>
        <p className={styles.p}>
          There are more than 100 kinds of products in our store to serve you.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
