import React from 'react'
import './Fooditem.css'
const Fooditem = ({id, name, price, description, image}) => {
  return (
    <div className='food-item'>
        <div className="food-item-image-container">
            <img src={image} alt="" className="food-item-image" />
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-description"> {description} </p>
            <p className="food-item-price"> ${price} </p>
        </div>
    </div>
  )
}
import './Fooditem.css'
import { assets } from '../../assets/assets'
export default Fooditem
