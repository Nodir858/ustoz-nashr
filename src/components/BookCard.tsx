import type { Book } from '../data/data'

//type Book is still defined only once in data.ts. 
// We are just reusing it here for type safety jala
interface BookCardProps {
    book: Book;
}

export default function BookCard({book} : BookCardProps) {
  return ( 

    <div className='rounded-2xl w-[250px]'>
      <div className='bg-gray-100 p-5 rounded-2xl '>
        <img className='h-60 m-auto rounded-xl' src={book.img} alt={book.title} />
      </div>
      <div className='space-y-3 py-1'>
        <h2>{book.title}</h2>
        <p className='font-medium'>{book.price} som</p>
        <button className='bg-blue-200 w-full p-2 text-blue-700 rounded-xl font-semibold'>Savatga qo'shish</button>
      </div>
    </div>
  )
}
