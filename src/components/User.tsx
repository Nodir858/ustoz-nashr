
export default function User() {
  return (
    <div className='bg-sky-100 h-screen'>
        <div className='max-w-7xl ml-auto mr-auto'>
            <h1 className='font-semibold text-4xl py-5'>Profil Sozlamalari</h1>
            <div className='max-w-[612px] bg-white p-7 rounded-xl h-full'>
                                <div className='space-y-3'>
                                        <label htmlFor="" className='mt-2'>Ism</label>
                                            <input type="text" className='bg-white px-3 py-2 rounded-lg w-full border border-stone-300' placeholder='name'/>
                                        <label htmlFor="" className='mt-2'>Telefon raqam</label>
                                            <input type="text" className='bg-white px-3 py-2 rounded-lg w-full border border-stone-300' placeholder='+998882028282'/>
                                </div>
                                <div className='flex items-center gap-3 mt-5 '>
                                    <button className='font-semibold bg-blue-500 text-white px-5 py-2 rounded-lg cursor-pointer'>Saqlash</button>
                                    <button className='font-semibold bg-gray-300 px-5 py-2 rounded-lg text-gray-700 cursor-pointer'>Bekor qilish</button>
                                </div>
              </div>
        </div>
    </div>
  )
}
