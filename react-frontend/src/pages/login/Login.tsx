import styles from "./styles/Login.module.css";
import LoginInput from "./LoginInput";
import LoginAuth from "./LoginAuth";
import LoginVisual from "./LoginVisual";

function Login() {
  return (
    <>
      <div className={styles.loginPageContainer}>
        <div className={styles.loginPageDisplayContainer}>
          <LoginVisual></LoginVisual>
        </div>
        <div className={styles.loginPageUserInputContainer}>
          <LoginInput></LoginInput>
          <LoginAuth></LoginAuth>
        </div>
      </div>
    </>
  );
}

export default Login;
