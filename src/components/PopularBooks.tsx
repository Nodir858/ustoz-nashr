import { bestsellers, specially } from '../data/data'
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { Link } from 'react-router-dom'

export default function PopularBooks() {
  return (
    <div className='w-full p-5 flex justify-center flex-wrap gap-10'>
        <div className='bg-orange-200 max-w-xl rounded-xl space-y-5 p-5'>
            <div className='space-y-2'>
                    <h1 className='flex justify-start text-3xl font-semibold'>Siz uchun maxsus</h1>
                    <p className='text-gray-600 flex justify-start w-2/3'>Ushbu bo‘limda siz sevimli kitoblaringiz bilan yanada chuqurroq tanishishingiz mumkin.</p>
            </div>
            <div className='relative flex gap-3'>
                {specially.map((value, index) => (
                    <div className={`overflow-x-auto ${index >= 3 ? 'hidden sm:block' : ''}`} key={value.id}>
                        <img src={value.banner} alt="" key={value.id} className='h-45 rounded-xl'/>
                    </div>
                ))}
                <Link to={`/allbooks`}>
                    <button className='absolute flex justify-center items-center w-10 h-10 -right-4 top-[43%] text-5xl z-10 cursor-pointer'><IoMdArrowDroprightCircle /></button>
                </Link>
            </div>
        </div>
        <div className='bg-blue-200 max-w-xl rounded-xl space-y-5 p-5'>
            <div className='space-y-2'>
                    <h1 className='flex justify-start text-3xl font-semibold'>Eng ko'p sotilganlar</h1>
                    <p className='text-gray-600 flex justify-start w-2/3'>Ushbu bo'limda kitobsevarlar tomonidan ko'p sotib olingan kitoblar bilan tanishishingiz mumkin.</p>
            </div>
            <div className='relative flex gap-3'>
                {bestsellers.map((value, index) => (
                    <div className={`overflow-x-auto ${index >= 3 ? 'hidden sm:block' : ''}`} key={value.id}>
                        <img src={value.banner} alt="" key={value.id} className='h-45 rounded-xl '/>
                        
                    </div>
                ))}
                <Link to={`/allbooks`}>
                    <button className='absolute flex justify-center items-center w-10 h-10 -right-4 top-[43%] text-5xl z-10 cursor-pointer'><IoMdArrowDroprightCircle /></button>
                </Link>
            </div>
        </div>
    </div>
  )
}
