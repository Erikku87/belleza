import Image from "next/image";
import styles from "../styles/navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.navigationWrap}>
      <div className={styles.navigationBar} style={{ fontFamily: "Cookie" }}>
        <div className={styles.navigationLeft}>
          <ul>
            <li className={styles.navigationLi}>
              <div className={styles.navigationLink}>Over Ons</div>
            </li>
            <li className={styles.navigationLi}>
              <div className={styles.navigationLink}>Gallerij</div>
            </li>
          </ul>
        </div>
        <div className={styles.navigationRight}>
          <ul>
            <li className={styles.navigationLi}>
              <div className={styles.navigationLink}>Tarieven</div>
            </li>
            <li className={styles.navigationLi}>
              <div className={styles.navigationLink}>Contact</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
