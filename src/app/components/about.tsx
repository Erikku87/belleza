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
          Welkom bij Belleza Stylist!
        </div>
        <div className={styles.aboutText}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
            maximus diam. Donec luctus ante eget lorem sagittis, quis accumsan
            sapien sagittis. Integer porttitor, lacus at sagittis molestie,
            tortor est rutrum dui, at volutpat ipsum sem id turpis. In hac
            habitasse platea dictumst. Proin vel laoreet metus. Ut vel enim
            diam. Aliquam vestibulum aliquet arcu sit amet porttitor.
            Pellentesque metus mauris, tincidunt ullamcorper volutpat dignissim,
            interdum id enim. Integer vel ligula non ex elementum pharetra.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
