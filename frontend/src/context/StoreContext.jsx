import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null) 

//create a store context provider fun
const StoreContextProvider =  (props)=> {
    const [cartItems, setCartItems] = useState({}) ;

    // functionality for add to cart
    const addToCart = (itemId)=>{
        if(!cartItems[itemId]){
             setCartItems((prev)=>({...prev, [itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        }
    }

    //remove from cart functionality
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }


    const contextvalue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }
    return (
        <StoreContext.Provider value={contextvalue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider ;