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
          ? { width: "auto", height: "auto", opacity: "1" }
          : { width: "0px", height: "0px", opacity: "0" }
      }
    >
      <div className={styles.popupContent}>
        <Image
          src={context.currentPort.image}
          alt="404"
          width="500"
          height="300"
          priority={true}
        />
        <div className={styles.portfolioText}>
          <h2>{context.currentPort.heading}</h2>
          <p>{context.currentPort.text}</p>
          <p>Tools:{context.currentPort.tools}</p>
          <p>Codes:{context.currentPort.codes}</p>
          {context.currentPort.link != "" && (
            <a href={context.currentPort.link} rel="noreferrer" target="_blank">
              <div className={styles.portfolioButton}>Preview</div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopupTarieven;
