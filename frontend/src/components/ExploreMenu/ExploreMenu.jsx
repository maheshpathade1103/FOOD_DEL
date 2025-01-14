import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
// In out asset.jsx file inside assets folder we have already created a menulist array....in it we have multiple objects with menu name and its image 
const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our Menu</h1>
        <p className='explore-menu-text'>Choose your delicious menu from our list</p>
        {/* we will render menu list under this list given below */}
        <div className="explore-menu-list">
            {menu_list.map((item, index)=>{
                 return(
                    <div className="explore-menu-list-item">
                        <img src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>

                 )
            })}
        </div>
    </div>
  )
}

export default ExploreMenu
