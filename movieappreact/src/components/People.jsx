import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import TopNav from '../templates/TopNav'
import Dropdown from '../templates/Dropdown'
import axios from "../utils/Axios";
import Cards from '../templates/Cards';
import Loading from '../templates/Loading';
import InfiniteScroll from 'react-infinite-scroll-component';


const People = () => {

    document.title = "Tv Shows";
    const navigate = useNavigate();
    const [category, setcategory] = useState("popular");
    const [person, setperson] = useState([]);
    const [page, setpage] = useState(1);
    const [hasmore, sethasmore] = useState(true);

    const getperson = async () => {
        try {
          const { data } = await axios.get(`/person/${category}?page=${page}`);
         // settrending(data.results);

         if(data.results.length > 0){
            setperson((prevState)=> [...prevState,...data.results]);
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

      console.log(person)

      const refreshHandler = ()=>{
        if(person.length === 0){
            getperson();
        }
        else{
          setpage(1);
          setperson([]);
          getperson();
        }
      }

      useEffect(()=>{
        refreshHandler();
      },[category])

  return person.length > 0 ? (
    <div className='w-screen h-screen '>
        <div className='px-[5%] w-full flex items-center justify-between'>
            <h1 className=' text-2xl text-zinc-400 font-semibold'>
            <i onClick={()=> navigate(-1)} 
            className="hover:text-[#6556CD] ri-arrow-left-line "></i>Person
            </h1>
            <div className='flex items-center w-[80%]'>
            <TopNav/>
            <div className='w-[2%]'></div>
            </div>
           
        </div>
        <InfiniteScroll
        dataLength={person.length}
        next={getperson}
        hasMore={hasmore}
        loader={<h1>Loading...</h1>}


        >
        <Cards data={person} title={category}/>
        </InfiniteScroll>

      
    </div>
  ) : <Loading/>
}

export default People;