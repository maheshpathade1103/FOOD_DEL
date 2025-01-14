import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'

const Home = () => {
    //create a state function
    const [category, setCategory] = useState("All")
  return (
    <div>
        {/* We will mount the header component to out home page */}
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home
