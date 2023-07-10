"use client";
import Image from "next/image";
import styles from "../styles/gallery.module.css";
import { Picture } from "../../../types";
import galleryData from "../../../gallery.json";
import { useEffect, useState, useContext } from "react";
import AppContext from "../context/appcontext";

const Gallery = ({ overLayImage }: any) => {
  const context: any = useContext(AppContext);

  const popTarieven = (pic: any) => {
    // const popopWrap = document.getElementById("popupWrap") as HTMLDivElement;
    context.setCurrentPort(pic);
    if (!context.popupTarieven) {
      context.setPopupTarieven(true);
      context.setOverlay(true);
    } else {
      context.setPopupTarieven(false);
      context.setOverlay(false);
    }
  };

  const closeTarieven = () => {
    context.setPopupTarieven(false);
    context.setOverlay(false);
  };

  return (
    <div id="galleryBorder" className={styles.galleryBorder}>
      <div className={styles.galleryWrap}>
        <div className={styles.galleryGrid}>
          {galleryData.pictures.map((picture: Picture) => (
            <div
              key={picture.id}
              id={picture.id}
              className={styles.gridItem}
              onClick={() => popTarieven(picture)}
            >
              <Image src={picture.image} alt="Picture of the author" fill />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
