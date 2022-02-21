import React, { useState, useEffect } from 'react'

import header from'../images/header-pic.png'
import book4 from '../images/Book 4.jpg'
import book5 from '../images/Book 5.jpg'
import book6 from '../images/Book 6.jpg'
import book7 from '../images/Book 7.jpg'
import Navbar from './Navbar'

function HomePage() {

  const onMenuToggle = (event) => {
    if (event.style.maxHeight == "0px") {
      event.style.maxHeight = "200px";
    } else {
      event.style.maxHeight = "0px";
    }
  }
  return (
    <>
      {/* <!------------------ Header ------------------> */}
      <div className="header">
        <div className="container">
         <Navbar/>
          <div className="row">
            <div className="col-2">
              <h1>
                The Books Lover<br />
                Read all About it!
              </h1>
              <p>
              Every book in a bookstore is a fresh beginning. Every book is the next iteration of a very old story. Every bookstore, therefore, is like a safe-deposit box for civilization
              </p>
              <a href="ebooks.html" className="btn">Explore Now &#x27F6;</a>
            </div>
            <div className="col-2">
              <img src={header} height='550px' alt="Header Pic" />
            </div>
          </div>
        </div>
      </div>
     
      {/* <!----------------featured Books --------------------> */}
      <div className="small-container">
        <h2 className="title">Featured Titles</h2>
        <div className="row">
          <div className="col-4">
            <a href="book-detail.html">
              <img src={book4} alt="Book 4"
              /></a>
            <a href="book-detail.html"> <h4>Anna Karenina</h4></a>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
          </div>
          <div className="col-4">
            <img src={book5} alt="Book 5" />
            <h4>Watership Down</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
              <i className="fa fa-star-o"></i>
            </div>
            
          </div>
          <div className="col-4">
            <img src={book6} alt="Book 6" />
            <h4>All The Night We Cannot See</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </div>
            
          </div>
          <div className="col-4">
            <img src={book7} alt="Book 7" />
            <h4>The HOBBIT</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
           
          </div>
        </div>
        <h2 className="title">Bestsellers</h2>
        <div className="row">
          <div className="col-4">
            <img src="images/Book 8.jpg" alt="Book 8" />
            <h4>Anna Karenina</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            
          </div>
          <div className="col-4">
            <img src="images/Book 9.jpg" alt="Book 9" />
            <h4>Watership Down</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
              <i className="fa fa-star-o"></i>
            </div>
            
          </div>
          <div className="col-4">
            <img src="images/Book 10.jpg" alt="Book 10" />
            <h4>All The Night We Cannot See</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </div>
            
          </div>
          <div className="col-4">
            <img src="images/Book 11.jpg" alt="Book 11" />
            <h4>The HOBBIT</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>Rs.500</p>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <img src="images/Book 12.jpg" alt="Book 12" />
            <h4>Anna Karenina</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>Rs.500</p>
          </div>
          <div className="col-4">
            <img src="images/Book 13.jpg" alt="Book 13" />
            <h4>Watership Down</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>Rs.500</p>
          </div>
          <div className="col-4">
            <img src="images/Book 14.jpg" alt="Book 14" />
            <h4>All The Night We Cannot See</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </div>
            <p>Rs.500</p>
          </div>
          <div className="col-4">
            <img src="images/Book 15.jpg" alt="Book 15" />
            <h4>The HOBBIT</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>Rs.500</p>
          </div>
        </div>
      </div>
     
      {/* <!-- ---------------------publishers------------------- --> */}
      <div className="publishers">
        <div className="small-container">
          <div className="row1">
            <div className="col-5">
              <img src="images/publisher1.jpg" />
            </div>
            <div className="col-5">
              <img src="images/publisher2.png" />
            </div>
            <div className="col-5">
              <img src="images/publisher3.jpeg" />
            </div>
            <div className="col-5">
              <img src="images/publisher4.jpg" />
            </div>
            <div className="col-5">
              <img src="images/publisher5.jpg" />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ---------------------footer------------------- --> */}
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col-1">
              <h3>Download Our App</h3>
              <p>Download App for Android and ios mobile phone.</p>
              <div className="app-logo">
                <img src="images/Playstore.png" />
                <img src="images/Applestore.png" />
              </div>
            </div>
            <div className="footer-col-2">
              <img src="images/EbookStore-Logo-footer.png" />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reiciendis, Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="footer-col-3">
              <h3>Useful Links</h3>
              <ul>
                <li>Coupons</li>
                <li>Blog Post</li>
                <li>Return Policy</li>
                <li>Join Affiliate</li>
              </ul>
            </div>
            <div className="footer-col-4">
              <h3>Follow us</h3>
              <ul>
                <li>Facebook</li>
                <li>Youtube</li>
                <li>Instagram</li>
                <li>Twitterr</li>
              </ul>
            </div>
          </div>
          <hr />
          <p className="copyright">Copyright 2020 - EbookStore</p>
        </div>
      </div>
    </>
  )
}

export default HomePage