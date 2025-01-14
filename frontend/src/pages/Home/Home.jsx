import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'

const Home = () => {
  return (
    <div>
        {/* We will mount the header component to out home page */}
      <Header/>
      <ExploreMenu/>
    </div>
  )
}

export default Home
