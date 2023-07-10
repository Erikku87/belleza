import Image from "next/image";
import styles from "../styles/page.module.css";
import AppContext from "../context/appcontext";
import { useEffect, useState, useContext } from "react";

const Section = () => {
  const context: any = useContext(AppContext);
  return (
    <div className={styles.section}>
      <div className={styles.section1}>
        <div className={styles.sectionLeft}>
          <div className={styles.sectionImage}></div>
        </div>
        <div className={styles.sectionRight}>
          <div
            className={styles.sectionRightHeading}
            style={{ fontFamily: "Great Vibes" }}
          >
            One by One Extensions
          </div>
          <p>
            Met de One by One techniek wordt er op elke gezond natuurlijke
            wimper één extension geplaatst. De extensions worden met een
            speciale lijm aangebracht. Extensions zijn verkrijgbaar in
            verschillende lengtes, diktes en kleuren, zodat ik de perfecte stijl
            kan creëren. Met de juiste styling lengte krul en dikte en gezonde
            wimpers krijg je een verfrissende look. Een oog bevat gemiddeld
            tussen de 90-120 natuurlijke wimpers. Je verliest per dag 2 tot 5
            wimpers per dag. De natuurlijke wimpers vallen niet tegelijkertijd
            daarom is het verstandig als je mooi look wilt behouden om de 2 a 3
            weken terug te komen voor een opvul.
          </p>
        </div>
      </div>
      <div className={styles.section2}>
        <div className={styles.sectionRight}>
          <div
            className={styles.sectionSvgHeading}
            style={
              context.isMobile
                ? { width: "100%", height: "68px", position: "relative" }
                : { width: "338px", height: "70px", position: "relative" }
            }
          >
            <Image
              id="logo"
              src="/lashartpro_logo_white.png"
              alt="404"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <p>
            Bij Belleza Stylist werken wij met producten van Lash Art Pro. Deze
            producten zijn erkend op de Nederlandse markt als van zeer hoge
            kwaliteit. Zoals gequote "Wij willen anders zijn dan de huidige
            markt, de lat ligt hoog, maar daar werken we het beste op. Al onze
            producten worden getest door de beste artiesten uit verschillende
            landen. Het komt pas op de markt als alles klopt."{" "}
            <a
              target="_blank"
              href="https://www.lashartpro.com/nl/"
              className={styles.lashartproLink}
            >
              <br />
              <br />- https://www.lashartpro.com
            </a>
          </p>
        </div>
        <div className={styles.sectionLeft}>
          <div className={styles.sectionImage2}></div>
        </div>
      </div>
    </div>
  );
};

export default Section;
