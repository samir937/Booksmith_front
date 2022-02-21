import React, { useState, useEffect } from 'react'
import BookListCard from './BookListCard'
import Connection from './Connection'
import Navbar from './Navbar'

function BookList() {
  
    const [books, setBooks] = useState([])
    const getData = async () => {
      await Connection.getBookList().then((res) => {
        setBooks(res.data);
  
      })
  
    }
  
    console.log(books);
  
    useEffect(() => {
      getData()
    }, [])
  
  
    return (
      <>
        <div className="container"><Navbar/></div>
      <div className='small-container'>
        <div className="search">All Ebooks</div>
        <div className="row">
          {books.map((element)=>{
          return <BookListCard/> 
        })}
        </div>
      </div>

      </>
      
    )
}

export default BookList