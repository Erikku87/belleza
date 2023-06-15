"use client";
import Image from "next/image";
import styles from "../styles/carousel.module.css";
import { Banner } from "../../../types";
import bannerData from "../../../banners.json";
import { useEffect, useState, useContext } from "react";

const Carousel = () => {
  const [widthBanner, setWidthBanner] = useState<number>(0);
  const [bannerPosition, setBannerPosition] = useState(0);
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    setBannerWidth();

    let timeout: NodeJS.Timeout; // Specify the type of the timeout variable

    const startCarouselLoop = () => {
      timeout = setTimeout(() => {
        if (currentBanner === 3) {
          bannerReset();
          startCarouselLoop(); // Call the function again to create the loop
        } else {
          rightClick();
          startCarouselLoop(); // Call the function again to create the loop
        }
      }, 7000);
    };

    startCarouselLoop(); // Start the initial loop

    return () => {
      // Cleanup function
      clearTimeout(timeout);
    };
  }, [currentBanner, widthBanner]); // Add currentBanner as a dependency to trigger the loop on changes

  // Determine the banners initial width depending on viewport width
  const setBannerWidth = () => {
    const carouselViewElement =
      document.getElementById("carouselView")!.offsetWidth;
    var elements = document.getElementsByClassName(
      `${styles.banner}`
    ) as HTMLCollectionOf<HTMLElement>;
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.width = carouselViewElement + "px";
    }
    setWidthBanner(carouselViewElement);
  };

  //reset Carousel

  const bannerReset = () => {
    setBannerPosition(0);
    setCurrentBanner(0);
    document.getElementById("arrowLeft")!.style.display = "none";
    document.getElementById("arrowRight")!.style.display = "flex";
    document.getElementById("carouselBanners")!.style.left = "0px";
  };

  //leftclick Carousel

  const leftClick = () => {
    if (currentBanner > 0) {
      setBannerPosition(bannerPosition + widthBanner);
      document.getElementById("carouselBanners")!.style.left =
        bannerPosition + widthBanner + "px";
      setCurrentBanner(currentBanner - 1);
    }
    if (currentBanner === 1) {
      document.getElementById("arrowLeft")!.style.display = "none";
    }
  };

  //rightclick carousel

  const rightClick = () => {
    if (currentBanner >= 0 && currentBanner < 3) {
      document.getElementById("arrowLeft")!.style.display = "flex";
      document.getElementById("carouselBanners")!.style.left =
        bannerPosition - widthBanner + "px";
      setBannerPosition(bannerPosition - widthBanner);
      setCurrentBanner(currentBanner + 1);
    } else {
      bannerReset();
    }
  };

  return (
    <div className={styles.carouselWrap}>
      <div id="carouselView" className={styles.carouselView}>
        <div id="carouselBanners" className={styles.carouselBanners}>
          {bannerData.banners.map((banner: Banner) => (
            <div
              id="banner"
              key={banner.id}
              className={styles.banner}
              style={{
                backgroundImage: `url('${banner.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          ))}
        </div>
        <div className={styles.carouselLeft} onClick={() => leftClick()}>
          <div id="arrowLeft" className={styles.arrowLeft}>
            <Image
              className={styles.arrowLeftImage}
              src="/arrow-left.svg"
              alt="Picture of the author"
              width={60}
              height={60}
              priority={true}
            />
          </div>
        </div>
        <div className={styles.carouselRight} onClick={rightClick}>
          <div id="arrowRight" className={styles.arrowRight}>
            <Image
              className={styles.arrowRightImage}
              src="/arrow-right.svg"
              alt="Picture of the author"
              width={60}
              height={60}
              priority={true}
            />
          </div>
        </div>
      </div>
      <div className={styles.underbanner}>
        <Image src="/underbanner.svg" alt="Picture of the author" fill />
      </div>
    </div>
  );
};

export default Carousel;
