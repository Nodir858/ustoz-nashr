import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Features from './Features'
import PopularBooks from './PopularBooks'
import { books } from '../data/data'
import BookCard from './BookCard'
import AllBooks from './AllBooks'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <Banner></Banner>
        <Features></Features>
        <PopularBooks></PopularBooks>
      
      <div className=''>
        <h1 className='font-semibold text-2xl text-center my-5'>Kitoblar</h1>
        <div className='w-fit m-auto grid grid-cols-5 gap-5'>
            {books.map((book) => (
              <Link to={`/product/${book.id}`}>
                <BookCard key={book.id} book={book}></BookCard>
              </Link>
            ))}
        </div>
      </div>

    </div>
  )
}
