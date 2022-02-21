import React from 'react'
import book4 from '../images/Book 4.jpg'
function BookListCard() {
  return (


      <div class="col-4">
          <a href="book-detail.html">
            <img src={book4} alt="Book 4"/>
          </a>
          <a href="book-detail.html"> <h4>Anna Karenina</h4> </a>
          <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
          </div>
        </div>
  
  )
}

export default BookListCard