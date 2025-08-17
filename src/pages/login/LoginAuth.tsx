import styles from "./styles/LoginAuth.module.css";
import googleLogo from "../../assets/Images/Authentication/Google.jpg";
import appleLogo from "../../assets/Images/Authentication/Apple.jpg";

function LoginAuth() {
  return (
    <>
      <div className="authenticationContainer">
        <p className="login-with-text">Login with: </p>

        <div className="loginOptionsWrapper">
          <div className={styles.genericLoginOption}>
            <img
              alt="Google Logo"
              className={styles.logoGeneric}
              src={googleLogo}
            />
            <div className={styles.loginOptionText}>
              <p>Continue with Google</p>
            </div>
          </div>
          <div className={styles.genericLoginOption}>
            <img
              alt="Apple logo"
              className={styles.logoGeneric}
              src={appleLogo}
            ></img>
            <div className={styles.loginOptionText}>
              <p>Continue with Apple</p>
            </div>
          </div>{" "}
          <div className={styles.genericLoginOption}>
            <img
              alt="Apple logo"
              className={styles.logoGeneric}
              src={appleLogo}
            ></img>
            <div className={styles.loginOptionText}>
              <p>Continue with Apple</p>
            </div>
          </div>{" "}
          <div className={styles.genericLoginOption}>
            <img
              alt="Apple logo"
              className={styles.logoGeneric}
              src={appleLogo}
            ></img>
            <div className={styles.loginOptionText}>
              <p>Continue with Apple</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginAuth;
