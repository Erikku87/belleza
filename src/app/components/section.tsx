import Image from "next/image";
import styles from "../styles/profile.module.css";
import AppContext from "../context/appcontext";
import { useEffect, useState, useContext } from "react";

const Section = () => {
  const context: any = useContext(AppContext);
  const navs = ["Identity", "Biography", "Projects", "Contact"];
  const [navSelected, setNavSelected] = useState("");

  useEffect(() => {
    //alert('Finished loading')
    document.getElementById("profilepicture")!.style.width = "21%";
    document.getElementById("profileinfo")!.style.width = "70%";
    document.getElementById("profilebuttons")!.style.width = "9%";
    document.getElementById("profile")!.style.opacity = "1";

    // return () => window.removeEventListener('resize', isMobileSize);
  }, []);

  const currentNav = (thisNav: any) => {
    navs.forEach((nav) => {
      const element = document.getElementById(nav);
      if (element) {
        element.style.transition = "all 1s ease";
        element.style.backgroundColor = "transparent";
        document.getElementById(nav)!.style.color = "black";
      }
    });

    switch (thisNav) {
      case "Identity":
        document.getElementById("Identity")!.style.backgroundColor = "#781e1e";
        document.getElementById("Identity")!.style.color = "white";
        return (
          <>
            <div className={styles.navHeading}>{thisNav}</div>
            <div>
              <ul>
                <li className={styles.label}>Name:</li>
                <li>Eric T</li>
                <li className={styles.label}>Occupation:</li>
                <li>Developer | UX/UI Designer | Musician</li>
                <li className={styles.label}>Country:</li>
                <li>Netherlands</li>
                <li className={styles.label}>E-mail:</li>
                <li>Erikkudesign@gmail.com</li>
              </ul>
            </div>
          </>
        );
      case "Biography":
        document.getElementById("Biography")!.style.backgroundColor = "#781e1e";
        document.getElementById("Biography")!.style.color = "white";
        return (
          <>
            <div className={styles.navHeading}>{thisNav}</div>
            <div className={styles.whoami}>
              <p>
                Hi, my name is Eric. I am a software developer located in The
                Netherlands. From an early age, I have always been interested in
                exploring new technology. It all started with playing computer
                games as a kid. Next to playing a lot of games, I got interested
                in how these games were created, which introduced me to
                programming. I started creating small games and websites at the
                time, more as a hobby than pursuing any career. From what
                started as my hobby, I feel really lucky to be able to make a
                living and a career now. Next to programming, I like to express
                myself creatively by making visual designs and musical
                compositions. The fundamentals of a great design lie in the
                balance of functionality, Usability & User Experience. This is
                what I have learned over the course of years and build my skills
                up on.
              </p>
            </div>
          </>
        );
      case "Contact":
        document.getElementById("Contact")!.style.backgroundColor = "#781e1e";
        document.getElementById("Contact")!.style.color = "white";
        return (
          <>
            <div className={styles.navHeading}>{thisNav}</div>
            <div className={styles.whoami}>
              <p>Form tijdelijk buiten gebruik, gelieve te mailen naar:</p>
              <br /> <br />
              <h4>Erikkudesign@gmail.com</h4>
            </div>
          </>
        );
      case "Projects":
        const targetElement = document.getElementById("galleryBorder");
        targetElement!.scrollIntoView({ behavior: "smooth" });
        return <></>;
      default:
        return (
          <>
            <br />
            <div className={styles.intro}>
              <h1>Erikku.Design</h1>
            </div>
            <div>
              <h4>Welcome to my portfolio!</h4>
            </div>
          </>
        );
    }
  };

  return (
    <div className={styles.profileframe}>
      <div id="profile" className={styles.profile}>
        <div id="profilepicture" className={styles.profilepic}></div>
        <div id="profilebuttons" className={styles.profilebuttons}>
          <ul>
            <li>
              <Image
                src="/images/ed_logo.png"
                width={40}
                height={40}
                alt="404"
              />
            </li>

            {navs.map((nav) => (
              <button
                id={nav}
                type="button"
                className={styles.profilebutton}
                key={nav}
                onClick={() => {
                  setNavSelected(nav);
                }}
              >
                <li className={styles.label}> {nav}</li>
              </button>
            ))}
          </ul>
        </div>
        <div id="profileinfo" className={styles.profileinfo}>
          {currentNav(navSelected)}
        </div>
      </div>
    </div>
  );
};

export default Section;
