import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import TopNav from '../templates/TopNav'
import Dropdown from '../templates/Dropdown'
import axios from "../utils/Axios";
import Cards from '../templates/Cards';
import Loading from '../templates/Loading';


const Trending = () => {

    const navigate = useNavigate();
    const [category, setcategory] = useState("all");
    const [duration, setduration] = useState("day");
    const [trending, settrending] = useState([]);

    const getTrending = async () => {
        try {
          const { data } = await axios.get(`/trending/${category}/${duration}`);
          settrending(data.results);
          console.log(data.results);
        } catch (error) {
          console.log(error);
        }
      };

      console.log(trending)

      useEffect(()=>{
        getTrending();
      },[category,duration])

  return trending.length > 0 ? (
    <div className='p-[3%] w-screen h-screen overflow-hidden overflow-y-auto'>
        <div className='w-full flex items-center justify-between'>
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

        <Cards data={trending} title={category}/>
    </div>
  ) : <Loading/>
}

export default Trending