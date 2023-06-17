import Image from "next/image";
import styles from "../styles/tarieven.module.css";
import AppContext from "../context/appcontext";
import { useEffect, useState, useContext } from "react";
import PopupRisico from "./popupRisico";
import PopupTarieven from "./popupTarieven";

const Tarieven = ({ switchOverlay }: any) => {
  const context: any = useContext(AppContext);

  const popTarieven = () => {
    // const popopWrap = document.getElementById("popupWrap") as HTMLDivElement;
    if (!context.popupTarieven) {
      context.setPopupTarieven(true);
      context.setOverlay(true);
    } else {
      context.setPopupTarieven(false);
      context.setOverlay(false);
    }
  };

  //   // if (context.overlay) {
  //   //   switchOverlay();
  //   // } else {
  //   //   context.setOverlay(true);
  //   // }
  // };

  return (
    <>
      <div className={styles.tarievenWrap}>
        <div className={styles.tarievenBorder}>
          <div
            className={styles.tarievenHeading}
            style={{ fontFamily: "Great Vibes" }}
          >
            Tarieven
          </div>
          <div className={styles.tarievenTabel} onClick={() => popTarieven()}>
            Click Hier om de tarieven te bekijken!
          </div>
        </div>
      </div>
    </>
  );
};

export default Tarieven;
