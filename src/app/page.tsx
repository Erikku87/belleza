"use client";
import Image from "next/image";
import styles from "./styles/page.module.css";
import stylesCarousel from "./styles/carousel.module.css";
import { useEffect, useState, Provider } from "react";
import Navigation from "./components/navigation";
import Section from "./components/section";
import Footer from "./components/footer";
import { Picture } from "../../types";
import AppContext from "./context/appcontext";
import Gallery from "./components/gallery";
import Topper from "./components/topper";
import Section2 from "./components/section2";

import PopupTarieven from "./components/popupTarieven";

export default function Home() {
  // const [widthBanner, setWidthBanner] = useState<number>(0);
  // const [bannerPosition, setBannerPosition] = useState(0);
  // const [banner, setBanner] = useState(0);
  const [overlay, setOverlay] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [popupRisico, setPopupRisico] = useState(false);
  const [popupTarieven, setPopupTarieven] = useState(false);
  const [currentPort, setCurrentPort] = useState<Picture>({
    id: "0",
    heading: "Octo",
    subheading: "",
    text: "I Started working at Octo as a freelance developer to create their first website. I have worked there for a year and created the design, front-end and back-end for the website. Now a few years later they turned into to Spotr.ai. Watch the video to see what I built for them.",
    image: "/images/octo.jpg",
  });
  const isMobileSize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    isMobileSize();

    // return () => window.removeEventListener('resize', isMobileSize);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", isMobileSize);

    // return () => window.removeEventListener('resize', isMobileSize);
  }, [isMobileSize]);

  const switchOverlay = () => {
    if (overlay) {
      setOverlay(false);
    } else {
      setOverlay(true);
    }
  };

  const handleButtonOverlay = () => {
    if (popupTarieven) {
      switchOverlay();
      setPopupTarieven(false);
    }
  };

  return (
    <>
      <AppContext.Provider
        value={{
          // widthBanner,
          // setWidthBanner,
          // bannerPosition,
          // setBannerPosition,
          // banner,
          // setBanner,
          overlay,
          setOverlay,

          isMobile,
          setIsMobile,
          popupRisico,
          setPopupRisico,
          popupTarieven,
          setPopupTarieven,
          currentPort,
          setCurrentPort,
        }}
      >
        <main className={styles.main}>
          <Topper />
          <Section />
          <Gallery />
        </main>
        <Footer />
        <div
          onClick={handleButtonOverlay}
          className={styles.overlay}
          style={{
            backgroundColor: overlay
              ? "rgba(0, 0, 0, 0.7)"
              : "rgba(0, 0, 0, 0)",
            height: overlay ? "100%" : "0%",
          }}
        ></div>
        <PopupTarieven />
      </AppContext.Provider>
    </>
  );
}
