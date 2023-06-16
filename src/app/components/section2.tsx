import Image from "next/image";
import styles from "../styles/page.module.css";

const Section2 = () => {
  return (
    <div className={styles.section}>
      <div className={styles.sectionRight}>
        <div
          className={styles.sectionRightHeading}
          style={{ fontFamily: "Great Vibes" }}
        >
          One by One Extensions
        </div>
        <p>
          Bij Belleza Stylist werken wij met producten van Lash Art Pro. Deze
          producten zijn erkend op de Nederlandse markt als van zeer hoge
          kwaliteit. We willen anders zijn dan de huidige markt, de lat ligt
          hoog, maar daar werken we het beste op. Al onze producten worden
          getest door de beste artiesten uit verschillende landen. Het komt pas
          op de markt als alles klopt.
        </p>
      </div>
      <div className={styles.sectionLeft}>
        <Image
          id="logo"
          src="/wimpers1.jpg"
          alt="404"
          width="300"
          height="300"
        />
      </div>
    </div>
  );
};

export default Section2;
