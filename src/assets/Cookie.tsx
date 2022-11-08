import { useCookies } from "react-cookie";

const Cookie = () => {
  // Setting cookie
  const [cookies, setCookie] = useCookies(["Cookie"]);

  // Accept on button
  const acceptCookie = () => {
    setCookie("Cookie", true, { path: "/" });
  };

  return (
    <>
      {cookies.Cookie ? (
        <></>
      ) : (
        <div
          data-aos="fade-up"
          data-aos-delay="2200"
          className="fixed bottom-20 z-10 mx-2 max-w-sm rounded-lg border border-white/10 bg-black p-7 font-Archivo text-white md:bottom-24 md:right-6 md:mx-0"
        >
          <p className="text-md font-medium">Avem și prăjituri</p>
          <p className="my-2 text-sm text-neutral-300">
            Acest site folosește Cookies pentru a vă aduce o experiență cât mai
            plăcută pe website.
          </p>
          <button
            type="button"
            className="inline-flex items-center rounded-lg bg-transparent text-center text-sm font-medium text-white focus:outline-none"
            onClick={acceptCookie}
          >
            Am înțeles
            <svg
              aria-hidden="true"
              className="ml-1 -mr-1 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default Cookie;
