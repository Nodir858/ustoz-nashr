import React from 'react'
import { bestsellers, specially } from '../data/data'
export default function PopularBooks() {
  return (
    <div className='w-full p-5 flex justify-center flex-wrap gap-10'>
        <div className='bg-orange-200 max-w-xl rounded-xl space-y-5 p-5'>
            <div className='space-y-2'>
                    <h1 className='flex justify-start text-3xl font-semibold'>Siz uchun maxsus</h1>
                    <p className='text-gray-600 flex justify-start w-2/3'>Ushbu bo‘limda siz sevimli kitoblaringiz bilan yanada chuqurroq tanishishingiz mumkin.</p>
            </div>
            <div className='flex gap-3'>
                {specially.map((value, index) => (
                    <div className=''>
                        <img src={value.banner} alt="" key={value.id} className='h-45 rounded-xl'/>
                    </div>
                ))}
            </div>
        </div>
        <div className='bg-blue-200 max-w-xl rounded-xl space-y-5 p-5'>
            <div className='space-y-2'>
                    <h1 className='flex justify-start text-3xl font-semibold'>Eng ko'p sotilganlar</h1>
                    <p className='text-gray-600 flex justify-start w-2/3'>Ushbu bo'limda kitobsevarlar tomonidan ko'p sotib olingan kitoblar bilan tanishishingiz mumkin.</p>
            </div>
            <div className='flex gap-3'>
                {bestsellers.map((value, index) => (
                    <div className=''>
                        <img src={value.banner} alt="" key={value.id} className='h-45 rounded-xl'/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
