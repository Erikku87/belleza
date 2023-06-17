import Image from "next/legacy/image";
import styles from "../styles/details.module.css";
import { useEffect, useState, useContext } from "react";
import AppContext from "../context/appcontext";

const Info = () => {
  const context: any = useContext(AppContext);
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
            style={
              context.isMobile
                ? { fontFamily: "Great Vibes", borderTop: "3px solid #d6a556" }
                : { fontFamily: "Great Vibes" }
            }
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
              className={styles.googlemapsImage}
              id="logo"
              src="/googlemaps.png"
              alt="404"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className={styles.googleMapsLink}>
            <a
              target="blank_"
              href="https://www.google.com/maps/place/Admiraal+Helfrichsingel+1,+2287+TA+Rijswijk/@52.0344981,4.320504,17z/data=!3m1!4b1!4m6!3m5!1s0x47c5b69ba6fa2af9:0x2d073c1eab83e1f0!8m2!3d52.0344981!4d4.3230789!16s%2Fg%2F11c2fksy_0?entry=ttu"
            >
              Google Maps link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
