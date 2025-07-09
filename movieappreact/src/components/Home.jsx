import React, { useEffect, useState } from "react";
import SideNav from "../templates/SideNav";
import TopNav from "../templates/TopNav";
import axios from "../utils/Axios";
import Header from "../templates/Header";
import HorizontalCards from "../templates/HorizontalCards";
import Dropdown from "../templates/Dropdown";

const Home = () => {
  document.title = "CineStream | Home"; // browser tab name when components load or mount. mostly use with useEffect()

  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all");

  const getWallPaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomData =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomData);
      settrending(data.results);
      //console.log(randomData);
      console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);

      settrending(data.results);
      console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrending();
    !wallpaper && getWallPaper();
  }, [category]);

  return wallpaper && trending ? (
    <>
      <SideNav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <TopNav />
        <Header data={wallpaper} />

        <div className="mb-5 flex justify-between p-5">
          <h1 className="text-3xl text-zinc-400 font-semibold mb-5">
            Trending
          </h1>
          <Dropdown title="Filter" options={["tv", "movie", "all"]} func={(e) => setcategory(e.target.value)} />
        </div>

        <HorizontalCards data={trending}  />
      </div>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Home;
