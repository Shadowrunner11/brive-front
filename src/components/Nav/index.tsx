import styles from "./styles.module.css";
import logo from "../../assets/Rick_and_Morty.svg";

export const Nav = () => (
  <header className={styles.header}>
    <div className={styles.header__logo}>
      <img src={logo} alt="Rick and Morty logo" />
    </div>
    <p>
      <strong>Terms + Conditions</strong>
    </p>
  </header>
);
