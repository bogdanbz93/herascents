import { useEffect } from "react";
import Logo from "../assets/logo.svg";
import Emag from "../assets/emag.svg";
import AOS from "aos";
import { Tooltip } from "../assets/Tooltip";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const buttonHandler = () => {
    window.open("https://www.facebook.com/HeraLumanariParfumate", "_blank");
  };

  return (
    <>
      <div className="m-auto flex grid min-h-screen grid-cols-1 content-between items-center justify-center">
        <div className="col-span-1 mx-auto pt-3 md:pt-5">
          <a href="/">
            <img className="md:w-none w-36 md:w-44" src={Logo} alt="Hera" />
          </a>
        </div>
        <div className="container col-span-1 mx-auto max-w-7xl px-7 pt-0 md:px-10 md:pb-0 md:pt-40">
          <h1 className="hidden">Hera Scents</h1>
          <h2
            data-aos="fade-up"
            data-aos-duration="1100"
            data-aos-delay="850"
            className="font-CerebriBold text-5xl tracking-tight md:text-7xl md:tracking-tighter"
          >
            Ești pregătit?
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="950"
            data-aos-duration="1100"
            className="mt-6 mb-10 max-w-lg font-Archivo text-lg font-medium text-neutral-300 md:text-xl"
          >
            Procesul de lucru al lumânărilor{" "}
            <span className="text-white">“handmade”</span> este unul minuțios,
            însă{" "}
            <span className="text-white underline decoration-1 underline-offset-8">
              nu suntem departe
            </span>{" "}
            de a fi gata.
          </p>
          <button
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="1100"
            className="learn-more"
            onClick={buttonHandler}
          >
            <span className="circle" aria-hidden="true">
              <span className="icon arrow" />
            </span>
            <span className="button-text font-Archivo">Facebook</span>
          </button>
        </div>
        <div className="relative z-50 col-span-1 mx-auto flex w-full items-center justify-between border-t border-white/5 px-5 py-5 text-center font-Archivo tracking-tight backdrop-blur-md md:px-8">
          <div className="w-1/3">
            <img
              src={Emag}
              alt="eMag Marketplace"
              className="duration-400 w-14 opacity-50 transition hover:opacity-100 md:w-16"
            />
          </div>
          <div className="w-1/3 text-center">
            <Tooltip message="Lumânările parfumate Hera sunt lucrate manual, cu grijă, din produse de calitate și non-toxice.">
              <span className="text-xl font-semibold">
                Hera<sup>®</sup>{" "}
                <small className="hidden font-medium text-neutral-300 md:inline-block">
                  Scents & Senses
                </small>
              </span>
            </Tooltip>
          </div>
          <div className="w-1/3 text-right">
            <a
              className="duration-400 font-medium tracking-normal text-neutral-400 transition hover:text-white lg:hidden"
              href="mailto:contact@herascents.ro"
            >
              Email
            </a>

            <a
              className="duration-400 hidden font-medium tracking-normal text-neutral-400 transition hover:text-white lg:inline-block"
              href="mailto:contact@herascents.ro"
            >
              contact@herascents.ro
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
