import {ADD_TO_CART} from '../Constants';
import {REMOVE_FROM_CART} from '../Constants';

//create actions
export const addToCart = (data)=>{
    // console.log("@@@@ props get into Action",data)
    return{
        type:ADD_TO_CART,
        data:data,
    }
}

export const removeFromCart = ()=>{
    console.log("removeFromCart Action")
    return{
        type:REMOVE_FROM_CART,
    }
}