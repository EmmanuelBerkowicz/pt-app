import styles from "./styles/Navbar.module.css";
import logo_light from "../../assets/Images/Navbar/logo-black.png";
import logo_dark from "../../assets/Images/Navbar/logo-white.png";
import search_icon_light from "../../assets/Images/Navbar/search-w.png";
import search_icon_dark from "../../assets/Images/Navbar/search-b.png";
import toggle_light from "../../assets/Images/Navbar/night.png";
import toggle_dark from "../../assets/Images/Navbar/day.png";
import { Link } from "react-router-dom";

interface NavbarProps {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

function Navbar({ theme, setTheme }: NavbarProps) {
  const toggleMode = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <div className={styles.navbarContainer}>
      <img
        src={theme == "light" ? logo_light : logo_dark}
        alt=""
        className={styles.logo}
      />

      <ul className={styles.linkList}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>Features</li>
        <li>About</li>
      </ul>

      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="search"
          className={styles.searchInput}
        ></input>
        <img
          src={theme == "light" ? search_icon_light : search_icon_dark}
          alt=""
          className={styles.searchIcon}
        />
      </div>
      <img
        onClick={() => {
          toggleMode();
        }}
        src={theme == "light" ? toggle_light : toggle_dark}
        alt=""
        className={styles.toggleIcon}
      />
    </div>
  );
}

export default Navbar;
