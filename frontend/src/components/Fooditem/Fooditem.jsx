import React, { useContext, useState } from "react";
import "./Fooditem.css";

const Fooditem = ({ id, name, price, description, image }) => {
  // this setter function is for add to cart option and initally it is 0
  //for each item this will be creating new state variable...thats not a best practice so to solve this issue we will create cart item objecty in our context
  //we wil create state variable cartitem in store context
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img src={image} alt="" className="food-item-image" />
        {/* // if food item count is 0 then provide add button else proide the counter button */}
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() =>
                removeFromCart(id)
              }
              src={assets.remove_icon_red}
              alt=""
            />
            <p> {cartItems[id]}</p>
            <img
              onClick={() =>   addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
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
  );
};
import "./Fooditem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
export default Fooditem;
