import Image from "next/image";
import styles from "../styles/popup.module.css";
import AppContext from "../context/appcontext";
import { useEffect, useState, useContext } from "react";

const PopupRisico = ({ switchOverlay }: any) => {
  const context: any = useContext(AppContext);

  const closeRisico = () => {
    context.setPopupRisico(false);
    context.setOverlay(false);
  };

  return (
    <div
      id="popupWrap"
      className={styles.popupWrap}
      onClick={closeRisico}
      style={
        context.popupRisico
          ? { width: "50%", height: "70%" }
          : { width: "0px", height: "0px" }
      }
    >
      <div className={styles.popupContent}>
        <div className={styles.eigenRisico}>
          <h1>Eigen risico</h1>
          <ul>
            <li>
              Eigen risico: Bent je zwanger of pas bevallen is er een kans dat
              de extensions niet plakken of sneller uitvallen. Dat komt door de
              hormonen, huilen of stress.
            </li>
            <li>
              Draag je bril/ lenzen? Voor de behandeling is het verstandig om
              bril te dragen. Het is verplicht om lenzen uit te trekken voor de
              behandeling. Zo verkom je schade op de lenzen of rode ogen,
              irritatie.
            </li>
            <li>
              Heb je een lijm allergie? Ja / Nee Heb je een lijm allergie aub
              meteen melden.
            </li>
            <li>
              Heb je last van Hooikoorts, neem op tijd je medicatie. Zo voorkom
              je traan ogen en jeuk in je ogen.
            </li>
            <li>
              Bij te veel tranen, in ogen wrijven,plukken of op gezicht slapen
              kunnen de extensions sneller uit vallen. (Hou er rekening mee als
              je sneller extensions verlies om het meteen te melden zo kunnen we
              bespreken als je eerder terug moet komen of extra tijd boeken.)
            </li>
            <li>
              Bij minder dan 45% wimperextensions wordt er een nieuwe set
              verrekend.
            </li>
            <li>
              Behanding: Een nieuwe set One by One behandeling duurt ongeveer
              1,5 tot 2 uur. Komt je voor het eerst? Hou er rekening mee met 15
              extra tijd voor intakegesprek.
            </li>
            <li>
              De refill-behandelingen duren gemiddeld 60 minuten tot 75 minuten.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PopupRisico;
