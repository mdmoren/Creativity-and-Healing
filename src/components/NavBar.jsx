import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { NavLinks } from "./links";
// import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const baseStyleX = `ml-10 text-md smd:text-xl cursor-pointer capitalize font-medium font-public-sans
  duration-200 link-underline
 text-gray-500 hover:text-black`;
  const baseStyleY = `my-5 text-xl cursor-pointer capitalize font-medium font-public-sans
  duration-200 link-underline
 text-gray-500 hover:text-black`;

  return (
    <div
      className="
      flex justify-between items-center 
      w-full h-10 md:h-20  fixed z-10
      transition-all duration-200"
    >
      <div
        className="
          flex flex-1 pl-[40px]
          justify-center sm:justify-start
          pt-3
          transition-all duration-500"
      >
        <h1
          className="
              text-xl md:text-3xl font-labelle
              cursor-pointer text-black
              transition-all duration-500"
        >
          Creativity and Violence
        </h1>
      </div>

      <ul className="mr-10 hidden sm:flex">
        {NavLinks.map(({ id, url, title, sublinks }) => (
          <li key={id} className={baseStyleX}>
            <li>
              <Link to={url}>{title}</Link>
            </li>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="
           cursor-pointer mr-5
          hover:scale-110 duration-200  
          text-[#999] sm:hidden"
      >
        {nav ? (
          <FaTimes className="hover:text-[#e74c3c]" size={25} />
        ) : (
          <FaBars className="hover:text-[#eee]" size={25} />
        )}
      </div>

      <ul
        className={`${
          nav
            ? "backdrop-blur-lg w-full"
            : "hidden opacity-0 backdrop-blur-none w-0"
        } h-screen absolute top-10 md:top-20 sm:hidden transition-all duration-300`}
      >
        <div
          className="
              flex flex-col m-5 p-10
              justify-center items-start
              bg-[#000000dc] shadow-md shadow-[#000] "
        >
          {NavLinks.map(({ id, url, title, sublinks }) => (
            <li key={id} className={baseStyleY}>
              <li>
                <Link to={url}>{title}</Link>
              </li>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
