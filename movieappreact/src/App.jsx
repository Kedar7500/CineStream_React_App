import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movie from './components/Movie'
import TvShows from './components/TvShows'
import People from './components/People'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#1F1E24] w-screen h-screen flex'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/trending' element={<Trending/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/movie' element={<Movie/>}/>
        <Route path='/tvshows' element={<TvShows/>}/>
        <Route path='/person' element={<People/>}/>
      </Routes>
    </div>
  )
}

export default App
