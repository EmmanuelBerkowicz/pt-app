import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Bottombar from "./layouts/Bottombar";
import { Routes, Route } from "react-router-dom";
// import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import "./assets/global.css";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

import styles from "./App.module.css";

type Theme = "light" | "dark";

function App() {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <div className={styles.appContainer}>
      <div className={`${styles.navbar} ${styles[theme]}`}>
        <Navbar theme={theme} setTheme={setTheme} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <div>
        <Bottombar />
      </div>
    </div>
  );
}

export default App;
