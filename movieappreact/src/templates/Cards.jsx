import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({data, title}) => {
  return (
    <div className='w-[full] flex flex-wrap overflow-hidden'>
    {data.map((d,i)=>(
        <Link key={i} className='w-[25vh] mr-[5%] mb-[5%]'>
        <img 
        className='h-[40vh] object-cover' 
        src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}`}
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