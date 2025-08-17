import styles from "./styles/LoginVisual.module.css";

function LoginVisual() {
  return (
    <div className={styles.LoginVisual}>
      <h1 className={styles.LoginVisualHeading}>Welcome to your PT app!</h1>
      <p className={styles.LoginVisualSubheading}>
        The webapp where you can track your exercise progress and give easy
        access to exercise routines!
      </p>
      <p className={styles.LoginVisualSubSubheading}>
        Also, I really hope this gets me a job... So if you are hiring a
        Software engineer, hello there!
      </p>
    </div>
  );
}

export default LoginVisual;
