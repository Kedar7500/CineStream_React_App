import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const TopNav = () => {
    const [query, setquery] = useState("");

    console.log(query);

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
        
        <div className='absolute bg-zinc-200 w-[50%] max-h-[50vh] top-[90%] overflow-auto '>
            {/* <Link className='hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 flex
             w-[100%] item-center p-8 border-b-2 border-zinc-100 '>
             <img src="" alt=""/>
            <span>Hello Everyone</span>
            </Link> */}
        </div>
    </div>
  )
}

export default TopNav