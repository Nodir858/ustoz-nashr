import { TbTruckDelivery } from "react-icons/tb";

export default function Features() {
  return (
    <div className='bg-sky-100 p-5'>
        <div className='flex flex-wrap justify-center gap-5'>
        <div className=' w-80 h-auto flex justify-center items-center gap-5 p-5 rounded-2xl bg-white'>
            <span className='w-15 h-15 flex justify-center items-center bg-blue-100 rounded-xl'>
                <TbTruckDelivery className='text-4xl text-blue-700'/>
            </span>
            <div className='w-50'>
                <h1 className='text-xl font-semibold'>Tez yetkazib berish</h1>
                <p className='text-sm'>Buyurtmalaringizni tez va ishonchli yetkazib beramiz</p>
            </div>
        </div>
        <div className=' w-80 h-auto flex justify-center items-center gap-5 p-5 rounded-2xl bg-white'>
            <span className='w-15 h-15 flex justify-center items-center bg-blue-100 rounded-xl'>
                <TbTruckDelivery className='text-4xl text-blue-700'/>
            </span>
            <div className='w-50'>
                    <h1 className='text-xl font-semibold'>Xavfsiz to'lov</h1>
                    <p className='text-sm'>To‘lovlaringiz xavfsiz tarzda amalga oshiriladiz</p>
            </div>
        </div>
        <div className=' w-80 h-auto flex justify-center items-center gap-5 p-5 rounded-2xl bg-white'>
            <span className='w-15 h-15 flex justify-center items-center bg-blue-100 rounded-xl'>
                <TbTruckDelivery className='text-4xl text-blue-700'/>
            </span>
            <div className='w-50'>
                <h1 className='text-xl font-semibold'>Eng yaxshi sifat</h1>
                <p className='text-sm'>Mahsulotlarimiz yuqori sifat standartlariga javob beradi</p>
            </div>
        </div>
        <div className=' w-80 h-auto flex justify-center items-center gap-5 p-5 rounded-2xl bg-white'>
            <span className='w-15 h-15 flex justify-center items-center bg-blue-100 rounded-xl'>
                <TbTruckDelivery className='text-4xl text-blue-700'/>
            </span>
            <div className='w-50'>
                <h1 className='text-xl font-semibold'>Qaytish kafolati</h1>
                <p className='text-sm'>Agar mahsulot yoqmasa, uni qaytarishingiz mumkin</p>
            </div>
        </div>
        </div>
    </div>
  )
}
