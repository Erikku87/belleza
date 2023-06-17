import Image from "next/image";
import styles from "../styles/popup.module.css";
import AppContext from "../context/appcontext";
import { useEffect, useState, useContext } from "react";

const PopupTarieven = ({ switchOverlay }: any) => {
  const context: any = useContext(AppContext);

  const closeTarieven = () => {
    context.setPopupTarieven(false);
    context.setOverlay(false);
  };

  return (
    <div
      id="popupWrap"
      className={styles.popupWrap}
      onClick={closeTarieven}
      style={
        context.popupTarieven
          ? { width: "auto", height: "90%" }
          : { width: "0px", height: "0px" }
      }
    >
      <div className={styles.popupContent}>
        <Image
          src={"/prijzenlijst.png"}
          alt="404"
          width="600"
          height="750"
          // style={
          //   context.isMobile
          //     ? { width: "100%", height: "auto" }
          //     : { width: "600", height: "750" }
          // }
          priority={true}
        />
      </div>
    </div>
  );
};

export default PopupTarieven;
