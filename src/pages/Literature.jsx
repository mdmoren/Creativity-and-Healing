import React from "react";

const Literature = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div
        name="l1"
        className="flex items-center justify-center w-full h-screen"
      >
        fiction
      </div>
      <div
        name="l2"
        className="flex items-center justify-center w-full h-screen"
      >
        nonfiction
      </div>
      <div
        name="l3"
        className="flex items-center justify-center w-full h-screen"
      >
        poetry
      </div>
      <div
        name="l4"
        className="flex items-center justify-center w-full h-screen"
      >
        music
      </div>
    </div>
  );
};

export default Literature;
