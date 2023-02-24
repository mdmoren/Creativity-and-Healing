import React from "react";
import brown from "../pictures/brown.jpg";
import teal from "../pictures/teal.jpg";
import cream from "../pictures/cream.jpg";
import gold from "../pictures/gold.jpg";

const Home = () => {
  return (
    <div
      name=""
      className="flex flex-col items-center justify-center w-full pt-14"
    >
      <div className="flex items-center justify-center w-full h-[80vh] bg-offwhite">
        <div
          className="absolute  smd:-translate-y-40 text-center text-shadow 
        text-7xl smd:text-7xl lg:text-9xl font-bold text-offwhite z-30 mx-[10vw] p-5"
        >
          Creativity & Healing
        </div>

        <div
          className="w-full h-full px-[4vw] smd:px-[10vw] py-[2vh] smd:py-[5vh] grid grid-cols-1 smd:grid-cols-3 
        grid-rows-4 smd:grid-rows-2 gap-0 transition-all duration-300"
        >
          <div className="h-full w-full overflow-hidden">
            <img
              src={brown}
              alt=""
              className="w-full h-full object-cover opacity-75 hover:opacity-100 transition-all duration-200"
            />
          </div>
          <div className="h-full w-full overflow-hidden smd:col-span-2">
            <img
              src={gold}
              alt=""
              className="w-full h-full object-cover opacity-75 hover:opacity-100 transition-all duration-200"
            />
          </div>
          <div className="h-full w-full overflow-hidden smd:col-span-2">
            <img
              src={cream}
              alt=""
              className="w-full h-full object-cover opacity-75 hover:opacity-100 transition-all duration-200"
            />
          </div>
          <div className="h-full w-full overflow-hidden">
            <img
              src={teal}
              alt=""
              className="w-full h-full object-cover opacity-75 hover:opacity-100 transition-all duration-200"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-[60vh] bg-oldgold">
        <div className="flex flex-col px-[4vw] smd:px-[10vw]">
          <h1 className="text-3xl text-blackbrown underline font-bold mb-4">About</h1>
          <p className="text-xl text-blackbrown">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur maxime minima, totam eligendi 
            exercitationem iste fuga vel ratione ipsa repellat dolor quos, quasi magni vitae iure facilis porro. 
            Maiores, dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nostrum officiis eum 
            accusamus dolorum non temporibus excepturi similique odio omnis quia quas totam repellendus doloremque,
            animi placeat, dolor unde hic!
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-[20vh] bg-blackbrown"></div>
    </div>
  );
};

export default Home;
