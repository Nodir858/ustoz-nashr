import { useEffect } from 'react'
import { useState } from 'react';
import { books } from '../data/data';
import  {useCart} from './cart-context/CartContext'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

type Book = (typeof books)[0]

type CartItem = Book & {
  quantity: number
}

export default function Cart() {

  const {cart, totalAmount, decreaseQuantity, updateQuantity} = useCart();

  const [products, setProducts] = useState<CartItem[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('cart')
    if(stored){
      //parse simply means:convert text (string) into real data
      setProducts(JSON.parse(stored))
    }
  }, [])


  return ( 
    <div className='bg-sky-100 h-screen'>
      <div className='max-w-7xl ml-auto mr-auto'>
        <h1 className='font-bold text-3xl py-5'>Savatcha</h1>
        <div>{
          products.length === 0 ?(
            <h1>Your cart has no product</h1>
          ) : (
            <div className='flex flex-col gap-y-5 lg:flex-row lg:gap-x-5'>
            {/*left products*/}
              <div className='md:w-2/3'>
                <div className='min-h-[400px] bg-white p-6 rounded-[10px] flex flex-col '>
                  {
                    cart.map((product) => (
                    <div className='flex justify-between items-center gap-4 border border-gray-400 rounded-lg p-3'>
                          <div className='flex'>
                            <img width={75} src={product.img} alt="" />
                            <div className='space-y-2 ml-2'>
                              <h4 className='font-bold text-lg'>{product.title}</h4>
                              <p className='font-normal'>{product.author}</p>
                              <p className='text-xl font-semibold'>{product.price} UZS</p>
                            </div>
                          </div>
                          <div className='flex justify-between items-center w-[120px] p-1 rounded-md'>
                              <button className='border p-1 rounded-lg cursor-pointer'
                                  onClick={() => 
                                    decreaseQuantity(product.id)
                                  }
                                >
                                  <FaMinus />
                              </button>
                                  <span className='text-xl'>{product.quantity || 1}</span>
                              <button className='border p-1 rounded-lg cursor-pointer'
                                  onClick={() => 
                                    updateQuantity(product.id, +1)
                                  }
                                >
                                  <FaPlus />
                              </button>
                              <div>
                                  <FaRegTrashAlt />
                              </div>
                        </div>
                    </div>
                    ))}                   
                </div>
              </div>
            {/*right summary*/}
              <div className='md:w-1/3 bg-white p-7 rounded-xl'>
                          <h2 className='font-semibold text-xl'>Umumiy buyurtma</h2>
                            <hr className='mt-5 text-gray-400'/>
                              <div className='flex justify-between items-center mt-5'>
                                <p className='font-semibold'>Kitoblar narxi</p>
                                <p className='font-bold text-base'>{totalAmount}UZS</p>
                              </div>
                            <hr className='text-gray-400 mt-5'/>
                                <div className='space-y-3 mt-5'>
                                          <input type="text" className='bg-slate-200 px-5 py-3 rounded-xl w-full ' placeholder='name'/>
                                          <input type="text" className='bg-slate-200 px-5 py-3 rounded-xl w-full' placeholder='+998882028282'/>
                                </div>
                                <div className='flex justify-between mt-5'>
                                    <p className='font-semibold'>Jami</p>
                                    <p className='font-bold text-xl'>{totalAmount}UZS</p>
                                </div>
                              <button className='bg-blue-500 text-white w-full p-3 rounded-xl mt-5'>Sotib olish</button>
              </div>
          </div>
          )}
        </div>
      </div>
    </div>
  )
}
