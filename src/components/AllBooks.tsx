import { useState } from 'react'
import { books } from '../data/data'
import { Link } from 'react-router-dom'

export default function AllBooks() {
  const [searchQuery, setSearchQuery] = useState<string>("")

  //filtering books by search
  const filteredBooks = books.filter((book) => 
  book.title.toLowerCase().includes(searchQuery.toLowerCase()))


  return (
    <div className='mx-auto'>
      <div className='flex justify-center mt-5'>
        <input type="text" 
          placeholder='Qidirish'
          className='p-3 bg-gray-100 rounded-2xl w-full max-w-md'
          onChange={(e) => setSearchQuery(e.target.value)}/>
      </div>
      {/*Display filtered books*/}
      <h1 className='font-semibold text-2xl text-center my-5'>Kitoblar</h1> 
      
      <div className='w-fit m-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-5'>
        {
          filteredBooks.map((book) => (
            <Link to={`/product/${book.id}`}>
            <div className=' w-[200px]'>
              <div className='bg-gray-100 px-7 py-5 rounded-2xl '>
              <img className='h-48 m-auto rounded-xl' src={book.img} alt="" />
              </div>
              <div className='space-y-3 py-1'>
                <h2 className='truncate'>{book.title}</h2>
                <p className='font-medium'>{book.price} som</p>
                <button className='bg-blue-200 w-full p-2 text-blue-700 rounded-xl font-semibold'>Savatga qo'shish</button>
              </div>
            </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
