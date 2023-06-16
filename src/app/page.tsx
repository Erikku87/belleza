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

export default function Home() {
  // const [widthBanner, setWidthBanner] = useState<number>(0);
  // const [bannerPosition, setBannerPosition] = useState(0);
  // const [banner, setBanner] = useState(0);
  const [overlay, setOverlay] = useState(false);
  const [imageViewing, setImageViewing] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  const switchOverlay = () => {
    if (overlay) {
      setOverlay(false);
      const picture = document.getElementById(imageViewing);
      picture!.style.transform = "scale(1.0)";
      picture!.style.position = "static";
      picture!.style.zIndex = "0";
    } else {
      setOverlay(true);
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
              width="320"
              height="320"
            />
            <Carousel />
            <About />
            <Section />

            <Gallery switchOverlay={switchOverlay} />
            <Tarieven />
          </div>
        </main>
        <Footer />
        <div
          onClick={switchOverlay}
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
      </AppContext.Provider>
    </>
  );
}
