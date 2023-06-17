"use client";
import Image from "next/image";
import styles from "../styles/gallery.module.css";
import { Picture } from "../../../types";
import galleryData from "../../../gallery.json";
import { useEffect, useState, useContext } from "react";
import AppContext from "../context/appcontext";

const Gallery = ({ overLayImage }: any) => {
  const context: any = useContext(AppContext);

  const viewImage = (id: any) => {
    context.setImageViewing(id);
    if (context.overlay) {
      overLayImage();
    } else {
      const picture = document.getElementById(id);
      picture!.style.position = "fixed";
      picture!.style.zIndex = "99";
      picture!.style.top = "50%";
      picture!.style.left = "50%";
      picture!.style.transform = "translate(-50%, -50%) scale(3.0)";

      context.setOverlay(true);
    }
  };

  return (
    <div className={styles.galleryBorder}>
      <div className={styles.galleryWrap}>
        <div
          className={styles.galleryHeading}
          style={{ fontFamily: "Great Vibes" }}
        >
          Belleza Gallery
        </div>
        <div className={styles.galleryGrid}>
          {galleryData.pictures.map((picture: Picture) => (
            <div
              key={picture.id}
              id={picture.id}
              className={styles.gridItem}
              onClick={() => viewImage(picture.id)}
            >
              <Image
                onClick={() => viewImage(picture.id)}
                src={"/" + picture.image}
                alt="404"
                width="210"
                height="210"
                style={
                  context.isMobile
                    ? { width: "140px", height: "140px" }
                    : { width: "210px", height: "210px" }
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
