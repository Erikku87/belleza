import { time } from "console";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/nav.module.css";
import AppContext from "../context/appcontext";
import { useEffect, useState, useContext } from "react";

export const Topper = ({}: any) => {
  const context: any = useContext(AppContext);

  return (
    <>
      <div className={styles.fakenav}></div>
      <nav className={`${styles.nav} fixed-top`}>
        <ul>
          <li>
            <div className={styles.navimg}>
              <Image
                src="/images/ed_logo.png"
                width={40}
                height={40}
                alt="404"
              />
            </div>
          </li>
          <li>
            <a href="/">Erikku</a>
          </li>
          <li>
            <a href="/" style={{ color: "red" }}>
              Design
            </a>
          </li>

          {/* <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link href='/'>Samples</Link>
                </li>
                <li>
                    <Link href='/about'>Contact</Link>
                </li> */}
        </ul>
      </nav>
    </>
  );
};

export default Topper;
