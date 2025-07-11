import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import TopNav from '../templates/TopNav'
import Dropdown from '../templates/Dropdown'
import axios from "../utils/Axios";
import Cards from '../templates/Cards';
import Loading from '../templates/Loading';
import InfiniteScroll from 'react-infinite-scroll-component';


const Movie = () => {

    document.title = "Movie";
    const navigate = useNavigate();
    const [category, setcategory] = useState("now_playing");
    const [Movie, setMovie] = useState([]);
    const [page, setpage] = useState(1);
    const [hasmore, sethasmore] = useState(true);

    const getMovie = async () => {
        try {
          const { data } = await axios.get(`/movie/${category}?page=${page}`);
         // settrending(data.results);

         if(data.results.length > 0){
            setMovie((prevState)=> [...prevState,...data.results]);
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

      console.log(Movie)

      const refreshHandler = ()=>{
        if(Movie.length === 0){
            getMovie();
        }
        else{
          setpage(1);
          setMovie([]);
          getMovie();
        }
      }

      useEffect(()=>{
        refreshHandler();
      },[category])

  return Movie.length > 0 ? (
    <div className='w-screen h-screen '>
        <div className='px-[5%] w-full flex items-center justify-between'>
            <h1 className=' text-2xl text-zinc-400 font-semibold'>
            <i onClick={()=> navigate(-1)} 
            className="hover:text-[#6556CD] ri-arrow-left-line "></i>Movie
            </h1>
            <div className='flex items-center w-[80%]'>
            <TopNav/>
            <Dropdown title="category" options={["popular","top_rated", "upcoming","now_playing"]} func={(e)=> setcategory(e.target.value)}/>
            <div className='w-[2%]'></div>
            </div>
           
        </div>
        <InfiniteScroll
        dataLength={Movie.length}
        next={getMovie}
        hasMore={hasmore}
        loader={<h1>Loading...</h1>}


        >
        <Cards data={Movie} title={category}/>
        </InfiniteScroll>

      
    </div>
  ) : <Loading/>
}

export default Movie;