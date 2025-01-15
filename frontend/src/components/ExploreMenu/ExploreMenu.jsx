import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
// In out asset.jsx file inside assets folder we have already created a menulist array....in it we have multiple objects with menu name and its image 
//this category and setcategory we have initialized in our Home.jsx file and created a state variable there
const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our Menu</h1>
        <p className='explore-menu-text'>Choose your delicious menu from our list</p>
        {/* we will render menu list under this list given below */}
        <div className="explore-menu-list">
            {menu_list.map((item, index)=>{
                 return(
                    // if previous state is same as the item.menu_name then set it as all else set it as item.menu_name
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>

                 )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu
