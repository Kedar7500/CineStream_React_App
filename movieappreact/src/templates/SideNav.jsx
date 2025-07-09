
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const SideNav = () => {

  return (
    <div className="w-[20%] h-full border-r-2 text-zinc-400 p-10">
      <h1 className="text-2xl font-bold italic text-center text-white">
        <i className="text-[#6556CD] ri-film-fill mr-2"></i>
        CineStream
      </h1>
      <h1 className="text-white font-bold mt-5">New Feeds</h1>
      <nav className="flex flex-col ml-5">
        <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded hover:font-bold text-xl p-4">
          <i className="mr-2 ri-fire-fill"></i>
          Trending
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded hover:font-bold text-xl p-4">
          <i className="mr-2 ri-bard-fill"></i>
          Popular
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded hover:font-bold text-xl p-4">
          <i className="mr-2 ri-movie-2-fill"></i>
          Movies
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded hover:font-bold text-xl p-4">
          <i className="mr-2 ri-tv-2-fill"></i>
          TV Shows
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded hover:font-bold text-xl p-4">
          <i className="mr-2 ri-team-fill"></i>
          People
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400" />
      <h1 className="text-white font-bold mt-5">Website Information</h1>
      <nav className="flex flex-col ml-5">
        <Link className="hover:bg-[#6556CD] hover:text-white rounded hover:font-bold text-xl p-4">
          <i className="ri-information-fill"></i>
          About
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded hover:font-bold text-xl p-4">
          <i className="ri-phone-fill"></i>
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default SideNav;
