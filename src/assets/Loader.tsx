import { useState, useEffect } from "react";
import gsap from "gsap";
import Logo from "./Logo";

const Loader = () => {
  // Set if loader is visible or not
  const [visible, setVisible] = useState(true);
  const [logoColor, setLogoColor] = useState("#FFF");

  // GSAP loader animations
  useEffect(() => {
    setTimeout(() => {
      setLogoColor("#FBD55B");
      console.log(tl.isActive());
    }, 600);

    gsap.to(".circle-loader", {
      width: "310px",
      height: "310px",
      delay: 0.5,
      duration: 1.5,
    });
    const tl = gsap.timeline({
      defaults: {
        duration: 0.5,
        ease: "ease",
      },
    });

    tl.to(".logoloading", { opacity: 1, scale: 1, ease: "expo", duration: 0.7 })
      .to(".slide", { height: 0, ease: "ease" })
      .to("#introduction", { opacity: 0, onComplete: () => setVisible(false) });

    console.log(tl.isActive());
  }, []);

  // Loader
  return (
    <>
      {visible ? (
        <div
          id="introduction"
          className="fixed flex h-screen w-full items-center justify-center bg-black text-white"
        >
          <div
            className="circle-loader rounded-full border border-[#FBD55B]"
            style={{ width: "260px", height: "260px" }}
          ></div>
          <div className="logoloading">
            <Logo className="logoNoBg" color={logoColor} size="200"></Logo>
          </div>
          <div className="slide"></div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Loader;
