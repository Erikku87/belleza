import { time } from "console";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/footer.module.css";

export const Footer = () => {
  return (
    <>
      <div className={styles.footerBar}>
        <div className={styles.footerWrap}>
          <div className={styles.footerContent}>
            <div className={styles.socialWrap}>
              <div className={styles.socialMediaLinks}>
                <div className={styles.socialHeading}>
                  <h5>Follow us: </h5>
                </div>
                <div className={styles.socialImages}>
                  <Image
                    id="socialImage"
                    src="/youtube.svg"
                    alt="404"
                    className={styles.socialIcon}
                    width="50"
                    height="35"
                  />
                  <a
                    href="https://www.instagram.com/bellezastylist/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Image
                      id="socialImage"
                      src="/instagram.svg"
                      alt="404"
                      className={styles.socialIcon}
                      width="35"
                      height="35"
                    />
                  </a>
                  <Image
                    id="socialImage"
                    src="/facebook.svg"
                    alt="404"
                    className={styles.socialIcon}
                    width="35"
                    height="35"
                  />
                  <Image
                    id="socialImage"
                    src="/linkedin.svg"
                    alt="404"
                    className={styles.socialIcon}
                    width="35"
                    height="35"
                  />
                </div>
              </div>
              <div className={styles.gameLinks}></div>
            </div>
            <hr className={styles.divider} />
            <div className={styles.footerBottom}>
              <div className={styles.websiteLinks}>
                <div className={styles.footerLogo}>
                  <Image src="/b.svg" alt="404" width="110" height="60" />
                </div>
                <ul>
                  <li>Certificaten</li>
                  <li>Eigen risico</li>
                  <li>Tarieven</li>
                </ul>
              </div>
              <div className={styles.copyright}>
                Powered by ErikkuDesign.com | Copyright © Belleza-stylist.com
                2023 | All right reserved.
              </div>
            </div>
          </div>
          {/* <div className={styles.copyright}>
                        Copyright © Belleza-stylist.com 2023 | All right reserved.
                    </div> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
