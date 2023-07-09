import styles from "./header.module.css";
import logoUrl from "../../assets/monstercat-logo.webp";
import MenuModal from "../MenuModal/MenuModal";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <img src={logoUrl} alt="Monstercat logo" className={styles.logo} />

        <MenuModal />
      </div>
    </header>
  );
};

export default Header;
