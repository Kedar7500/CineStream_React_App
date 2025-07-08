import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({data}) => {
  return (
    <div style={{
        background:`linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.7),rgba(0,0,0,0.9)), 
        url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path || data.poster_path})`,
        backgroundPosition:"center",
        backgroundSize:"cover"
    }}
     className='w-full h-[60vh] flex flex-col justify-end items-start p-[5%]'
     >
    <h1 className='text-white text-2xl font-black w-[70%]'>
    {data.name || data.original_name || data.original_title}
    </h1>
    <p className='text-white w-[50%] mt-3 mb-3'>{data.overview.slice(0,200)}
    <Link className='text-blue-900'>More...</Link>
    </p>
    <p className='text-white '>
    <i className=" text-white ri-megaphone-line"></i>{""}
    {data.release_date || "No Information"}
    <i className="text-white ml-5 ri-album-fill"></i>{""}
    {data.media_type.toUpperCase()}
    </p>
    <Link className='bg-[#6556CD] mt-5 p-4 rounded text-white'>
        Watch Trailer
    </Link>
    </div>
  )
}

export default Header