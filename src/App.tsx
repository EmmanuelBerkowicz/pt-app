import Navbar from "./components/navbar/Navbar";
import Bottombar from "./layouts/Bottombar";
import "./assets/global.css";
import Login from "./pages/login/Login";
import styles from "./App.module.css";
import { useState } from "react";

type Theme = "light" | "dark";

function App() {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <div>
      <div className={`${styles.navbar} ${styles[theme]}`}>
        <Navbar theme={theme} setTheme={setTheme} />
      </div>
      <div>
        <Login />
      </div>
      <div>
        <Bottombar />
      </div>
    </div>
  );
}

export default App;
