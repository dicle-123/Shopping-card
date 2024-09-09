import Navbar from "../Navbar/Navbar";
import Product from "../Product/Product";
import styles from "./ShopPage.module.css";

import image1 from "../../assets/product-1.jpg";
import image2 from "../../assets/product-2.jpg";
import image3 from "../../assets/product-3.jpg";
import image4 from "../../assets/product-4.jpg";
import image5 from "../../assets/product-5.jpg";
import image6 from "../../assets/product-6.jpg";
import image7 from "../../assets/product-7.jpg";
import image8 from "../../assets/product-8.jpg";

function ShopPage() {
  const cartItemCount = 3;
  return (
    <div>
      <Navbar cartItemCount={cartItemCount} />
      <div className={styles.shopContainer}>
        <div className={styles.products}>
          <Product id={1} name="T-shirt" price={29.99} image={image1} />
          <Product id={2} name="Backpack" price={30.99} image={image2} />
          <Product id={3} name="Trouser" price={22.85} image={image3} />
          <Product id={4} name="Shoes" price={40.85} image={image4} />
          <Product id={5} name="T-shirt" price={77.85} image={image5} />
          <Product id={6} name="Shoes" price={90.85} image={image6} />
          <Product id={7} name="Shoes" price={72.85} image={image7} />
          <Product id={8} name="Dress" price={95.85} image={image8} />
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
