import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { NavLinks } from "./links";
// import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex w-screen h-14 bg-zinc-600">

      <ul className="h-full w-full justify-center items-center hidden smd:flex">
        {NavLinks.map(({ id, url, title, sublinks }) => (
          <li key={id} className=" group text-sm mx-4 font-semibold text-[#bbb] hover:text-[#fff] font-sans link-underline">
              <Link to={url}>{title}</Link>

              { sublinks.length > 0 &&
                  <ul className="hidden group-hover:flex flex-col absolute top-14 m-2">
                    {sublinks.map(({title,link}) => (
                      <li>
                        <Link onClick={() => setNav(!nav)} to={url} 
                            className='text-sm font-semibold text-[#bbb] hover:text-[#fff] font-sans'>
                            {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                }  
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)}
        className="flex w-full items-center justify-end smd:hidden ">
        {nav ? ( <FaTimes className="m-5 cursor-pointer hover:scale-110 duration-200 text-[#bbb] hover:text-[#e74c3c]" size={20} />) : 
        (<FaBars className="m-5 cursor-pointer hover:scale-110 duration-200 text-[#bbb] hover:text-[#fff]" size={20} />)}
      </div>

      <div className={`${nav ? "w-full" : "hidden w-0"}  flex absolute top-14 smd:hidden transition-all duration-300 bg-zinc-600`}>
        <ul className=" flex flex-col justify-center items-start w-full p-5">
          {NavLinks.map(({ id, url, title, sublinks }) => (
            <li key={id} className="w-full py-2 group">
                <Link onClick={() => setNav(!nav)} to={url} className='text-sm font-semibold text-[#bbb] hover:text-[#fff] font-sans'>{title}</Link>
                
                { sublinks.length > 0 &&
                  <ul className="hidden group-hover:flex flex-col m-2">
                    {sublinks.map(({title,link}) => (
                      <li>
                        <Link onClick={() => setNav(!nav)} to={url} 
                            className='text-sm font-semibold text-[#bbb] hover:text-[#fff] font-sans'>
                            {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                }  

            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default NavBar;
