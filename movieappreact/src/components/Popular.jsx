import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import TopNav from '../templates/TopNav'
import Dropdown from '../templates/Dropdown'
import axios from "../utils/Axios";
import Cards from '../templates/Cards';
import Loading from '../templates/Loading';
import InfiniteScroll from 'react-infinite-scroll-component';


const Popular = () => {

    document.title = "Popular";
    const navigate = useNavigate();
    const [category, setcategory] = useState("movie");
    const [popular, setpopular] = useState([]);
    const [page, setpage] = useState(1);
    const [hasmore, sethasmore] = useState(true);

    const getPopular = async () => {
        try {
          const { data } = await axios.get(`/${category}/popular?page=${page}`);
         // settrending(data.results);

         if(data.results.length > 0){
            setpopular((prevState)=> [...prevState,...data.results]);
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

      console.log(popular)

      const refreshHandler = ()=>{
        if(popular.length === 0){
            getPopular();
        }
        else{
          setpage(1);
          setpopular([]);
          getPopular();
        }
      }

      useEffect(()=>{
        refreshHandler();
      },[category])

  return popular.length > 0 ? (
    <div className='w-screen h-screen '>
        <div className='px-[5%] w-full flex items-center justify-between'>
            <h1 className=' text-2xl text-zinc-400 font-semibold'>
            <i onClick={()=> navigate(-1)} 
            className="hover:text-[#6556CD] ri-arrow-left-line "></i>Popular
            </h1>
            <div className='flex items-center w-[80%]'>
            <TopNav/>
            <Dropdown title="category" options={["movie","tv"]} func={(e)=> setcategory(e.target.value)}/>
            <div className='w-[2%]'></div>
            </div>
           
        </div>
        <InfiniteScroll
        dataLength={popular.length}
        next={getPopular}
        hasMore={hasmore}
        loader={<h1>Loading...</h1>}


        >
        <Cards data={popular} title={category}/>
        </InfiniteScroll>

      
    </div>
  ) : <Loading/>
}

export default Popular