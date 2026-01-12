import Banner from './Banner'
import Features from './Features'
import PopularBooks from './PopularBooks'
import { books } from '../data/data'
import BookCard from './BookCard'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <Banner></Banner>
        <Features></Features>
        <PopularBooks></PopularBooks>
      <div className=''>
        <h1 className='font-semibold text-2xl text-center my-5'>Kitoblar</h1>
        <div className='w-fit mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
            {books.map((book) => (
              <Link key={book.id} to={`/product/${book.id}`}>
                <BookCard book={book}></BookCard>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
