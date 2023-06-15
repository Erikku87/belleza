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
          <div
            className={styles.tarievenTabelHeading}
            style={{ fontFamily: "Great Vibes" }}
          >
            Wimpers
          </div>
          <div className={styles.tarievenRow}>
            <div className={styles.tarievenBehandeling}>Nieuwe Set</div>
            <div className={styles.tarievenPrijs}>€ 120,-</div>
          </div>
          <div className={styles.tarievenRow}>
            <div className={styles.tarievenBehandeling}>Touch Up</div>
            <div className={styles.tarievenPrijs}>€ 25,-</div>
          </div>
        </div>
        <div className={styles.tarievenTabel}>
          <div
            className={styles.tarievenTabelHeading}
            style={{ fontFamily: "Great Vibes" }}
          >
            Workshop
          </div>
          <div className={styles.tarievenRow}>
            <div className={styles.tarievenBehandeling}>30 minuten</div>
            <div className={styles.tarievenPrijs}>€ 30,-</div>
          </div>
          <div className={styles.tarievenRow}>
            <div className={styles.tarievenBehandeling}>60 minuten</div>
            <div className={styles.tarievenPrijs}>€ 50,-</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tarieven;
