import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Home Page</h1>
      <p className={styles.p}>Welcome to our Page!</p>
    </div>
  );
}

export default HomePage;
