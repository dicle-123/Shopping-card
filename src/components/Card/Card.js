import style from "./Card.module.css";

function Cart() {
  return (
    <div className={style.cart}>
      <h2>Your Cart</h2>
      <p>No item in your cart</p>
    </div>
  );
}

export default Cart;
