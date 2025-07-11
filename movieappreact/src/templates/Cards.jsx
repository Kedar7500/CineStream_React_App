import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({data, title}) => {
  return (
    <div className='w-full h-full flex flex-wrap px-[5%]  bg-[#1F1E24] '>
    {data.map((d,i)=>(
        <Link key={i} className='w-[25vh] mr-[5%] mb-[5%]'>
        <img 
        className='h-[40vh] object-cover' 
        src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path || d.profile_path}`}
         alt=""
         />
         <h1 className='text-2xl text-zinc-300 font-semibold mt-3'>
         {d.name || d.original_name || d.original_title}
         </h1>
        
        </Link>
    ))}
    </div>
  )
}

export default Cards