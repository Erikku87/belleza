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
                ? { width: "200px", height: "35px", position: "relative" }
                : { width: "338px", height: "70px", position: "relative" }
            }
          >
            <Image
              id="logo"
              src="/lashartpro_logo_white.svg"
              alt="404"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <p>
            Met de One by One techniek wordt er op elke gezond natuurlijke
            wimper één extension geplaatst. De extensions worden met een
            speciale lijm aangebracht. Extensions zijn verkrijgbaar in
            verschillende lengtes, diktes en kleuren, zodat ik de perfecte stijl
            kan creëren. Met de juiste styling lengte krul en dikte en gezonde
            wimpers krijg je een verfrissende look. Een oog bevat gemiddeld
            tussen de 90-120 natuurlijke wimpers. Je verliest per dag 2 tot 5
            wimpers per dag.
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
