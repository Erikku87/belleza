import Image from "next/image";
import styles from "../styles/about.module.css";

const About = () => {
  return (
    <div className={styles.section}>
      <div className={styles.aboutWrap}>
        <div
          className={styles.aboutHeading}
          style={{ fontFamily: "Great Vibes" }}
        >
          Welkom bij BellezaStylist!
        </div>
        <div className={styles.aboutText}>
          <p>
            Bellezastylist is een salon die voornamelijk gericht is op
            wimperextensions en wimperlift. Alle diensten zijn hygiënisch,
            zorgvuldig en persoonlijke gericht. Ik zorg de juiste styling voor
            jou.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
