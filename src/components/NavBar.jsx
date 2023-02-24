import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { NavLinks } from "./links";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState(null);

  var Scroll = require("react-scroll");
  const navigate = useNavigate();

  const handleDropdownClick = (id) => {
    setOpenDropdownId((prevOpenDropdownId) =>
      prevOpenDropdownId === id ? null : id
    );
  };

  function handleSubLink(url, link) {
    navigate(url);

    // Wait for 500 milliseconds, then scroll to the desired link
    setTimeout(() => {
      Scroll.scroller.scrollTo(link, {
        duration: 1000,
        delay: 100,
        smooth: true,
        // offset: 50,
      });
    }, 100);
  }

  return (
    <div className="fixed flex w-screen h-14 bg-zinc-600">
      <ul className="items-center justify-center hidden w-full h-full smd:flex">

        <Link to="/" className="hidden md:flex mx-4 text-[#fff] font-sans font-bold text-md cursor-pointer">Creativity and Healing</Link>
        <Link to="/" className="flex md:hidden mx-4 text-[#fff] font-sans font-bold text-md cursor-pointer">CH</Link>

        {NavLinks.map(({ id, url, title, sublinks }) => (
          <li key={id} className="relative mx-4">
            <div className="flex items-center cursor-pointer">
              <Link
                to={url}
                className="text-sm font-semibold text-[#bbb] hover:text-[#fff] font-sans link-underline"
              >
                {title}
              </Link>
              {sublinks.length > 0 && (
                <IoMdArrowDropdown
                  onClick={() => handleDropdownClick(id)}
                  className="ml-2 text-[#bbb] hover:text-[#fff]"
                />
              )}
            </div>
            {sublinks.length > 0 && openDropdownId === id && (
              <div className="absolute z-10 px-4 py-2 rounded-md bg-zinc-600 top-full">
                {sublinks.map(({link, title }, index) => (
                  <div
                    key={index}
                    className="block text-sm font-semibold text-[#bbb] hover:text-[#fff] font-sans my-2"
                    onClick={() => {
                      handleDropdownClick(id);
                      handleSubLink(url, link);
                    }}
                  >
                    {title}
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>

      <div
        
        className="flex items-center justify-between w-full smd:hidden "
      >
        <Link to="/" className="mx-10 text-[#fff] font-sans font-bold text-md cursor-pointer">Creativity and Healing</Link>
        <div onClick={() => setNav(!nav)}>
        {nav ? (
          <FaTimes
            className="m-10 cursor-pointer hover:scale-110 duration-200 text-[#bbb] hover:text-[#e74c3c]"
            size={20}
          />
        ) : (
          <FaBars
            className="m-10 cursor-pointer hover:scale-110 duration-200 text-[#bbb] hover:text-[#fff]"
            size={20}
          />
        )}
        </div>
      </div>

      <div
        className={`${
          nav ? "w-full" : "hidden w-0"
        }  flex absolute top-14 smd:hidden transition-all duration-300 bg-zinc-600`}
      >
        <ul className="flex flex-col items-start justify-center w-full p-5 ">
          {NavLinks.map(({ id, url, title, sublinks }) => (
            <li key={id} className="w-full py-2 group">
              <Link
                onClick={() => setNav(!nav)}
                to={url}
                className="text-sm font-semibold text-[#bbb] hover:text-[#fff] font-sans"
              >
                {title}
              </Link>

              {sublinks.length > 0 && (
                <ul className="flex-col hidden m-2 group-hover:flex">
                  {sublinks.map(({ title, link}, index) => (
                    <li key={index}>
                      <div
                        onClick={() => {
                          setNav(!nav);
                          handleSubLink(url, link);
                        }}
                        className="my-2 text-sm font-semibold text-[#bbb] hover:text-[#fff] font-sans"
                      >
                        {title}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
