import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";

export default function Footer() {

    

  return (
<div className='py-12 px-6 bg-sky-100'>
        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='space-y-4'>
                    <h1 className='text-xl font-semibold text-gray-800'>Ustoz Nashr</h1>
                    <p className='font-medium text-gray-700'>Bizga obuna bo'ling</p>
                </div>
                <div className='space-y-4'>
                    <h1 className='text-xl font-semibold text-gray-800'>Foydali havolalar</h1>
                    <ul>
                        <li className='font-medium text-gray-700'>Bosh sahifa</li>
                        <li className='font-medium text-gray-700'>Bo'limlar</li>
                        <li className='font-medium text-gray-700'>Barcha kitoblar</li>
                    </ul>
                </div>
                <div className='space-y-4'>
                    <h1 className='text-xl font-semibold text-gray-800'>Kompaniya haqida</h1>
                    <ul>
                        <li className='font-medium text-gray-700' >Privacy Policy</li>
                        <li className='font-medium text-gray-700'>Terms & Conditions</li>
                    </ul>
                </div>
                <div className='space-y-4'>
                    <h1 className='text-xl font-semibold text-gray-800'>Bizning do'konimiz</h1>
                    <div className='flex items-center'>
                        <IoLocationOutline />
                        <p className='font-medium text-gray-700'>O'zbekiston, Toshkent shahri</p>
                    </div>
                    <div className='flex items-center'>
                        <IoCallOutline />
                        <p className='font-medium text-gray-700'>+998 77 191 91 31</p>
                    </div>
                </div>
            </div>
            <div className='mt-12 border-t pt-8 border-gray-200'>
                <p className='text-gray-500 text-sm'>Ustoz Nashr - © 2025 Barcha huquqlar himoyalangan</p>
            </div>
        </div>
</div>

  )
}
