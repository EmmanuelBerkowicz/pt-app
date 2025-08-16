import styles from "./Login.module.css";

function LoginInput() {
  return (
    <div className={styles.LoginInput}>
      <form className={styles.LoginInputUserForm}>
        <label id="username">Username or Email: </label>
        <input type="text" placeholder="Enter username"></input>
        <label id="password">Password: </label>
        <input type="password" placeholder="Password"></input>
      </form>
    </div>
  );
}

export default LoginInput;
