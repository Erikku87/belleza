import Image from "next/image";
import styles from "../styles/popup.module.css";
import AppContext from "../context/appcontext";
import { useEffect, useState, useContext } from "react";

const PopupCursus = ({ switchOverlay }: any) => {
  const context: any = useContext(AppContext);

  const closeCursus = () => {
    context.setPopupCursus(false);
    context.setOverlay(false);
  };

  return (
    <div
      id="popupWrap"
      className={styles.popupWrap}
      onClick={closeCursus}
      style={
        context.popupCursus
          ? { width: "auto", height: "90%" }
          : { width: "0px", height: "0px" }
      }
    >
      <div className={styles.popupContent}>
        <Image
          src={"/cursus1.png"}
          alt="404"
          width="600"
          height="600"
          // style={
          //   context.isMobile
          //     ? { width: "100%", height: "auto" }
          //     : { width: "600", height: "750" }
          // }
          priority={true}
        />
        <Image
          src={"/cursus2.png"}
          alt="404"
          width="600"
          height="600"
          // style={
          //   context.isMobile
          //     ? { width: "100%", height: "auto" }
          //     : { width: "600", height: "750" }
          // }
          priority={true}
        />
        <Image
          src={"/cursus3.png"}
          alt="404"
          width="600"
          height="600"
          // style={
          //   context.isMobile
          //     ? { width: "100%", height: "auto" }
          //     : { width: "600", height: "750" }
          // }
          priority={true}
        />
        <Image
          src={"/cursus4.png"}
          alt="404"
          width="600"
          height="600"
          // style={
          //   context.isMobile
          //     ? { width: "100%", height: "auto" }
          //     : { width: "600", height: "750" }
          // }
          priority={true}
        />
        <Image
          src={"/cursus5.png"}
          alt="404"
          width="600"
          height="600"
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

export default PopupCursus;
