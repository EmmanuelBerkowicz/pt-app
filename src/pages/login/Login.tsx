import styles from "./styles/Login.module.css";
import LoginInput from "./LoginInput";
import LoginAuth from "./LoginAuth";
import LoginVisual from "./LoginVisual";

function Login() {
  return (
    <>
      <div className={styles.loginContainer}>
        <div className={styles.iconColumn}>
          <LoginVisual></LoginVisual>
        </div>
        <div className={styles.loginDetails}>
          <LoginInput></LoginInput>
          <LoginAuth></LoginAuth>
        </div>
      </div>
    </>
  );
}

export default Login;
