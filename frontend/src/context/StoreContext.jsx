import { createContext } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null) 

//create a store context provider fun
const StoreContextProvider =  (props)=> {
    const contextvalue = {
        food_list
    }
    return (
        <StoreContext.Provider value={contextvalue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider ;