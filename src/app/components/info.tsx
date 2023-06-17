import Image from "next/legacy/image";
import styles from "../styles/details.module.css";

const Info = () => {
  return (
    <div className={styles.detailsWrap}>
      <div className={styles.detailsBorder}>
        <div
          className={styles.detailsHeading}
          style={{ fontFamily: "Great Vibes" }}
        >
          Locatie & tijden
        </div>
        <div className={styles.detailsTabel}>
          <div
            className={styles.detailsTabelHeading}
            style={{ fontFamily: "Great Vibes" }}
          >
            Openingstijden
          </div>
          <div className={styles.detailsRow}>
            <div className={styles.detailsBehandeling}>Woensdag</div>
            <div className={styles.detailsPrijs}>11:00 - 17:30</div>
          </div>
          <div className={styles.detailsRow}>
            <div className={styles.detailsBehandeling}>Donderdag</div>
            <div className={styles.detailsPrijs}>11:30 - 18:00</div>
          </div>
          <div className={styles.detailsRow}>
            <div className={styles.detailsBehandeling}>Vrijdag</div>
            <div className={styles.detailsPrijs}>14:00 - 20:30</div>
          </div>
          <div className={styles.detailsRow}>
            <div className={styles.detailsBehandeling}>Zaterdag</div>
            <div className={styles.detailsPrijs}>11:30 - 18:00</div>
          </div>
          <div className={styles.detailsRow}>
            <div className={styles.detailsBehandeling}>Zondag</div>
            <div className={styles.detailsPrijs}>12:00 - 18:30</div>
          </div>
        </div>

        <div className={styles.detailsTabel}>
          <div
            className={styles.detailsTabelHeading}
            style={{ fontFamily: "Great Vibes" }}
          >
            Locatie
          </div>
          <div className={styles.adres}>
            <div>Admiraal Helfrichsingel 1</div>
            <div>2287 TA Rijwijk</div>
            <div>Nederland</div>
            <div>bellezalashstylist@gmail.com</div>
          </div>
          <br />
          <br />
          <div className={styles.googleMaps}>
            <Image
              className={styles.mainLogo}
              id="logo"
              src="/googlemaps.png"
              alt="404"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
