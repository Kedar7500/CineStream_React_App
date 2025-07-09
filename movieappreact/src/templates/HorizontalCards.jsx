import React from "react";
import Dropdown from "./Dropdown";

const HorizontalCards = ({ data }) => {
  return (
   
      <div className="w-full flex h-[40vh] overflow-x-auto space-x-5 mb-5 p-5 ">
        {data.map((d, i) => (
          <div
            key={i}
            className="min-w-[20%] max-w-[20%] bg-zinc-800 p-2 mb-5 rounded-lg flex-shrink-0"
          >
            <img
              className="w-full h-[45%] object-cover rounded"
              src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.profile_path || d.poster_path
              }`}
              alt={d.name || d.original_name || d.original_title}
            />
            <h1 className="text-white text-lg font-semibold mt-2 truncate">
              {d.name || d.original_name || d.original_title}
            </h1>
            <p className="text-white text-sm mt-2  text-ellipsis ">
              {d.overview?.slice(0, 100)}...
              <span className='text-blue-900'>More</span>
            </p>
          </div>
        ))}
      </div>

  );
};

export default HorizontalCards;
