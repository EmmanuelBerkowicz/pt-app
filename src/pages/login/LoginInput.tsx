import styles from "./styles/LoginInput.module.css";
import Button from "../../components/ui/button/Button";

function LoginInput() {
  const handleLogin = () => alert("You done click da login ting!");

  return (
    <div className={styles.LoginInput}>
      <form className={styles.LoginInputUserForm}>
        <div className={styles.LoginInputHeadingContainer}>
          <h1 className={styles.LoginInputHeading}>LOGIN</h1>
        </div>
        <div className="userNameField">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 7L10.94 11.3375C11.5885 11.7428 12.4115 11.7428 13.06 11.3375L20 7M5 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input type="text" placeholder="Enter username"></input>
        </div>
        <div className="passwordField">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000000"
          >
            <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm240-200q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Z" />
          </svg>
          <input type="password" placeholder="Password"></input>
        </div>
        <Button label="Login" onClick={handleLogin}></Button>
      </form>
      <div className={styles.registerLink}>
        <p> Do not have an account? </p>
        <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0&list=RDxvFZjo5PgG0&start_radio=1">
          Register
        </a>
      </div>
    </div>
  );
}

export default LoginInput;
