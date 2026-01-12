import type { Book } from "../../data/data";

export interface Product extends Book {
  quantity: number;
}

// const storeInLocalStorage = 

type CartAction = 
    | {type: "ADD_TO_CART"; payload: Book}
    | {type: "UPDATE_QUANTITY"; payload: {id: number; totalAmount: number}}
    | {type: "DECREASE_QUANTITY"; payload: {id: number; totalAmount: number}}
    | {type: "REMOVE_FROM_CART"; payload: number}
    | {type: "CLEAR_CART"}


export function cartReducer(state: Product[], action: CartAction): Product[]{
    switch(action.type){
        case "ADD_TO_CART":{
            const existingItem = state.find(
                item => item.id === action.payload.id
            )
            if(existingItem){
                return state.map(item =>
                    item.id === action.payload.id
                    ? {...item, quantity: item.quantity + 1}
                    : item
                )
            }

                return [...state, {...action.payload, quantity: 1}]
        }
        case "UPDATE_QUANTITY":{
             return state.map(item => 
                item.id === action.payload.id
                ? {...item, quantity: item.quantity + action.payload.totalAmount}
                : item
             ).filter(item => item.quantity > 0)
        }
        

                // return state.map(item =>
                // item.id === action.payload
                // ? {...item, quantity: item.quantity + 1}
                // : item)

    case "DECREASE_QUANTITY":{
        return state.map(item =>
        item.id === action.payload.id
        ? {...item, quantity: item.quantity - 1}
        : item
        ).filter(item => item.quantity > 0)
    }



        case "REMOVE_FROM_CART":
        return state.filter(item => item.id !== action.payload)

        case "CLEAR_CART":
                return []

        default: 
        return state
} 
}
