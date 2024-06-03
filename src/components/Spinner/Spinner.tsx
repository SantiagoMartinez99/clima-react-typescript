import styles from "./Spinner.module.css";

function Spinner() {
  return (
    <div className={styles["spiner-container"]}>

    <div className={styles["sk-chase"]}>
      <div className={styles["sk-chase-dot"]}></div>
      <div className={styles["sk-chase-dot"]}></div>
      <div className={styles["sk-chase-dot"]}></div>
      <div className={styles["sk-chase-dot"]}></div>
      <div className={styles["sk-chase-dot"]}></div>
      <div className={styles["sk-chase-dot"]}></div>
    </div>
    </div>
  );
}

export default Spinner;
