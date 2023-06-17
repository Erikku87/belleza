import Image from "next/image";
import styles from "../styles/tarieven.module.css";

const Tarieven = () => {
  return (
    <div className={styles.tarievenWrap}>
      <div className={styles.tarievenBorder}>
        <div
          className={styles.tarievenHeading}
          style={{ fontFamily: "Great Vibes" }}
        >
          Tarieven
        </div>
        <div className={styles.tarievenTabel}>
          Click Hier om de tarieven te bekijken!
        </div>
      </div>
    </div>
  );
};

export default Tarieven;
