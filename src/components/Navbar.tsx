import { Link } from 'react-router-dom'
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { useCart } from './cart-context/CartContext';

export default function Navbar() {

  const {totalItems} = useCart()

  return (
    <div className='sticky flex bg-white justify-center p-3 items-center font-semibold'>
      <div className='container max-w-7xl ml-auto mr-auto flex justify-between items-center p-2'>
      <div className='text-2xl'>
          Ustoz-Nashr
      </div>
      <div className=''>
        <li className='list-none flex min-w-45 justify-between'>
          <Link to={"/"}>
          <ul>Asosiy</ul>
          </Link>
          <Link to={'/allbooks'}>
          <ul>Barcha kitoblar</ul>
          </Link>
        </li>
      </div>
      <div className='w-1/15 flex justify-between'>
          <Link className='relative' to={"/cart"}>
            <MdOutlineShoppingCart className='text-2xl'/>
              <div className="absolute flex justify-center items-center text-center bottom-2 left-3 text-sm bg-blue-500 rounded-full w-[25px] h-[25px]">
                <span >
                  {totalItems}
                </span>
              </div>
          </Link>
          <Link to={"/user"}>
            <FaRegUser className='text-2xl'/>
          </Link>
      </div>
      </div>
    </div>
  )
}
