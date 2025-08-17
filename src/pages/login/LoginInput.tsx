import styles from "./styles/LoginInput.module.css";
import Button from "../../components/ui/button/Button";

function LoginInput() {
  const handleLogin = () => alert("You done click da login ting!");

  return (
    <div className={styles.LoginInput}>
      <form className={styles.LoginInputUserForm}>
        <h1>LOGIN</h1>
        <div className="userNameField">
          <label id="username">Username or Email: </label>
          <input type="text" placeholder="Enter username"></input>
        </div>
        <div className="passwordField">
          <label id="password">Password: </label>
          <input type="password" placeholder="Password"></input>
        </div>
        <Button label="Login" onClick={handleLogin}></Button>
      </form>
      <div className={styles.registerLink}>
        <p> Do not have an account? </p>
        <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0&list=RDxvFZjo5PgG0&start_radio=1">
          Click here to register
        </a>
      </div>
    </div>
  );
}

export default LoginInput;
