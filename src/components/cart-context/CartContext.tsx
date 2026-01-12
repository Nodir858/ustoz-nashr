import { createContext, useContext, useEffect, useReducer} from "react";
import type { Book } from "../../data/data";
import { cartReducer } from "./CartReducer";
import { getItem, setItem } from "./localStorage";

export interface CartItem extends Book {
  quantity: number;
}

//we store in context
interface CartContextType {
  cart: CartItem[];//array of items
  addToCart: (product: Book) => void;//function to add product
  removeFromCart:(id:number) => void;
  updateQuantity:(id: number, amount: number) => void;
  decreaseQuantity:(id:number) => void;
  totalItems: number;
  totalAmount: number;
}

//store cart data globally
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {

  // const [count, setCount] = useState(() =>{
  //   const item = getItem('cart');
  //   return (item) || 0;
  // })
  //cart state, manage cart state
  const [cart, dispatch] = useReducer(cartReducer, getItem('cart') || [])
  
    useEffect(() => {
      setItem('cart', cart)
    }, [cart])
  
  const addToCart = (product: Book) => {
    dispatch({ type: "ADD_TO_CART", payload: product})
  }

  const removeFromCart = (id: number) => {
    dispatch({type: 'REMOVE_FROM_CART', payload: id})
  }

  const updateQuantity = (id: number, totalAmount:number) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: {id, totalAmount},
    })
  }

  const decreaseQuantity = (id: number) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: {id, totalAmount}
    })
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  )

  return (
    <CartContext.Provider 
    value={{ cart, addToCart,removeFromCart, updateQuantity, decreaseQuantity, totalItems, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
};

//useCart() custom hook just calls useContext(cartContext)
export const useCart = () => {
  const context = useContext(CartContext);
    if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
};

export default CartContext;
