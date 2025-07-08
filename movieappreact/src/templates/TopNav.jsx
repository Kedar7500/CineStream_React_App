import React, { useEffect, useState } from 'react'
import { Link, data } from 'react-router-dom'
import axios from "../utils/Axios";
import noimage from '/noimage.png'

const TopNav = () => {
    const [query, setquery] = useState("");
    const [searches, setsearches] = useState([]);

    console.log(query);

    const getSearches = async()=>{
      try {
        const {data} = await axios.get(`/search/multi?query=${query}`);
        //console.log(data);
        setsearches(data.results);
        
      } catch (error) {
        console.log(error);
      }
    }
  
    useEffect(()=>{
      getSearches();
      
    },[query])
  

  return (
    <div className='relative w-full h-[10vh] flex justify-start items-center ml-[10%]'>
        <i className="text-zinc-400 text-3xl ri-search-line"></i>
        <input onChange={(e)=>setquery(e.target.value)} className='text-2xl w-[50%] bg-transparent text-zinc-200 border-none outline-none mx-3'
         type='text' 
         value={query}
         placeholder='search'/>
         {query.length > 0 && 
         (<i 
            onClick={()=> setquery("")} 
            className="text-zinc-400 text-3xl ri-close-line"></i>
        )};
        
        <div className='absolute bg-zinc-200 w-[50%] max-h-[50vh] top-[90%] left-[3%] overflow-auto '>
          {searches.map((s,i)=>(
            <Link key={i} 
            className='hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 flex
             w-[100%] item-center p-8 border-b-2 border-zinc-100 '>
             <img
             className='w-[10vh] h-[10vh] object-cover rounded mr-5 shadow'
              src= {s.backdrop_path || s.profile_path ?
              `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`: noimage}  alt=""/>
            <span>{s.name || s.title || s.original_name || s.original_title}</span>
            </Link>
          ))}
        </div>
    </div>
  )
}

export default TopNav