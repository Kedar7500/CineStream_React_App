import React, { useEffect, useState } from 'react'
import SideNav from '../templates/SideNav';
import TopNav from '../templates/TopNav';
import axios from '../utils/Axios';
import Header from '../templates/Header';

const Home = () => {
    document.title = "CineStream | Home";  // browser tab name when components load or mount. mostly use with useEffect()

    const [wallpaper, setwallpaper] = useState(null);

    const getWallPaper = async()=>{
      try {

        const {data} = await axios.get(`/trending/movie/day`);
        let randomData = data.results[(Math.random()*data.results.length).toFixed()];
        setwallpaper(randomData);
        console.log(randomData);
        
        
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(()=>{
      !wallpaper && getWallPaper();
    })


  return wallpaper ? (
    <>
      <SideNav/>
      <div className='w-[80%] h-full'>
        <TopNav/>
        <Header data={wallpaper}/>
      </div>
    </>
  ) : <h1>Loading...</h1>
}

export default Home