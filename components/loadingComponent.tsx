import styles from "../styles/loadingComponent.module.css";

export default function LoadingComponent() {
  return (
    <div className={styles.outer}>
      <div className={styles.loader}></div>
    </div>
  );
}
