"use client";
import Image from "next/image";
import styles from "./styles/page.module.css";
import stylesCarousel from "./styles/carousel.module.css";
import { useEffect, useState, Provider } from "react";
import Navigation from "./components/navigation";
import Section from "./components/section";
import Footer from "./components/footer";
import Carousel from "./components/carousel";
import AppContext from "./context/appcontext";
import Gallery from "./components/gallery";
import About from "./components/about";
import Section2 from "./components/section2";
import Tarieven from "./components/tarieven";
import Info from "./components/info";
import PopupTarieven from "./components/popupTarieven";
import PopupRisico from "./components/popupRisico";

export default function Home() {
  // const [widthBanner, setWidthBanner] = useState<number>(0);
  // const [bannerPosition, setBannerPosition] = useState(0);
  // const [banner, setBanner] = useState(0);
  const [overlay, setOverlay] = useState(false);
  const [imageViewing, setImageViewing] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [popupRisico, setPopupRisico] = useState(false);
  const [popupTarieven, setPopupTarieven] = useState(false);
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

  const resetImage = () => {
    const picture = document.getElementById(imageViewing);
    picture!.style.transform = "scale(1.0)";
    picture!.style.position = "static";
    picture!.style.zIndex = "0";
  };

  const overLayImage = () => {
    resetImage();
    switchOverlay();
  };

  const handleButtonOverlay = () => {
    if (popupTarieven) {
      switchOverlay();
      setPopupTarieven(false);
    } else if (popupRisico) {
      switchOverlay();
      setPopupRisico(false);
    } else {
      overLayImage();
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
          imageViewing,
          setImageViewing,
          isMobile,
          setIsMobile,
          popupRisico,
          setPopupRisico,
          popupTarieven,
          setPopupTarieven,
        }}
      >
        <main className={styles.main}>
          <Navigation />
          <div className={styles.goldBorder}>
            <Image
              className={styles.mainLogo}
              id="logo"
              src="/rond_new_color.svg"
              alt="404"
              width="350"
              height="350"
              style={
                isMobile
                  ? { width: "300px", height: "300px" }
                  : { width: "350px", height: "350px" }
              }
            />
            <Carousel />
            <About />
            <Section />

            <Gallery overLayImage={overLayImage} />
            <Info />
            <Tarieven switchOverlay={switchOverlay} />
          </div>
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
        >
          {" "}
        </div>
        <PopupTarieven />
        <PopupRisico />
      </AppContext.Provider>
    </>
  );
}
