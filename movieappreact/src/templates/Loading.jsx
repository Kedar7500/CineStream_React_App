import React from "react";
import loader from "/loader.gif";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <img className="h-[60%] object-cover filter invert" src={loader} alt="" />
    </div>
  );
};

export default Loading;
