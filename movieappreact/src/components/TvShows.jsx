import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import TopNav from '../templates/TopNav'
import Dropdown from '../templates/Dropdown'
import axios from "../utils/Axios";
import Cards from '../templates/Cards';
import Loading from '../templates/Loading';
import InfiniteScroll from 'react-infinite-scroll-component';


const TvShows = () => {

    document.title = "Tv Shows";
    const navigate = useNavigate();
    const [category, setcategory] = useState("airing_today");
    const [tv, settv] = useState([]);
    const [page, setpage] = useState(1);
    const [hasmore, sethasmore] = useState(true);

    const gettv = async () => {
        try {
          const { data } = await axios.get(`/tv/${category}?page=${page}`);
         // settrending(data.results);

         if(data.results.length > 0){
            settv((prevState)=> [...prevState,...data.results]);
          setpage(page+1);
         }
         else{
          sethasmore(false);
         }
         
          console.log(data.results);
        } catch (error) {
          console.log(error);
        }
      };

      console.log(tv)

      const refreshHandler = ()=>{
        if(tv.length === 0){
            gettv();
        }
        else{
          setpage(1);
          settv([]);
          gettv();
        }
      }

      useEffect(()=>{
        refreshHandler();
      },[category])

  return tv.length > 0 ? (
    <div className='w-screen h-screen '>
        <div className='px-[5%] w-full flex items-center justify-between'>
            <h1 className=' text-2xl text-zinc-400 font-semibold'>
            <i onClick={()=> navigate(-1)} 
            className="hover:text-[#6556CD] ri-arrow-left-line "></i>Tv Shows
            </h1>
            <div className='flex items-center w-[80%]'>
            <TopNav/>
            <Dropdown title="category" options={["popular","top_rated", "on_the_air","airring_today"]} func={(e)=> setcategory(e.target.value)}/>
            <div className='w-[2%]'></div>
            </div>
           
        </div>
        <InfiniteScroll
        dataLength={tv.length}
        next={gettv}
        hasMore={hasmore}
        loader={<h1>Loading...</h1>}


        >
        <Cards data={tv} title={category}/>
        </InfiniteScroll>

      
    </div>
  ) : <Loading/>
}

export default TvShows;