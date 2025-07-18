import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import TopNav from '../templates/TopNav'
import Dropdown from '../templates/Dropdown'
import axios from "../utils/Axios";
import Cards from '../templates/Cards';
import Loading from '../templates/Loading';
import InfiniteScroll from 'react-infinite-scroll-component';


const Trending = () => {

    document.title = "Trending";
    const navigate = useNavigate();
    const [category, setcategory] = useState("all");
    const [duration, setduration] = useState("day");
    const [trending, settrending] = useState([]);
    const [page, setpage] = useState(1);
    const [hasmore, sethasmore] = useState(true);

    const getTrending = async () => {
        try {
          const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
         // settrending(data.results);

         if(data.results.length > 0){
          settrending((prevState)=> [...prevState,...data.results]);
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

      console.log(trending)

      const refreshHandler = ()=>{
        if(trending.length === 0){
          getTrending();
        }
        else{
          setpage(1);
          settrending([]);
          getTrending();
        }
      }

      useEffect(()=>{
        refreshHandler();
      },[category,duration])

  return trending.length > 0 ? (
    <div className='w-screen h-screen '>
        <div className='px-[5%] w-full flex items-center justify-between'>
            <h1 className=' text-2xl text-zinc-400 font-semibold'>
            <i onClick={()=> navigate(-1)} 
            className="hover:text-[#6556CD] ri-arrow-left-line "></i>Trending
            </h1>
            <div className='flex items-center w-[80%]'>
            <TopNav/>
            <Dropdown title="category" options={["all","movie","tv"]} func={(e)=> setcategory(e.target.value)}/>
            <div className='w-[2%]'></div>
            <Dropdown title="Duration" options={["week","day"]} func={(e)=> setduration(e.target.value)}/>
            </div>
           
        </div>
        <InfiniteScroll
        dataLength={trending.length}
        next={getTrending}
        hasMore={hasmore}
        loader={<h1>Loading...</h1>}


        >
        <Cards data={trending} title={category}/>
        </InfiniteScroll>

      
    </div>
  ) : <Loading/>
}

export default Trending