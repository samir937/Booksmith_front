import React from 'react'
import cart from '../images/cart.png'
import logo from '../images/book-logo.png'
import {Link} from "react-router-dom";
  
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="index.html">
                    <img src={logo} alt="EbookStore-Logo"
                    /></Link>
            </div>
            {/* <!----------  Nav Bar ------------------> */}
            <nav>
                <ul id="MenuItems">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/bookList">Ebooks</Link></li>
                    <li><Link to="">About</Link></li>
                    <li><Link to="">Contact</Link></li>
                    <li><Link to="account.html">Account</Link></li>
                </ul>
            </nav>
            <Link to="cart.html">
                <img
                    src={cart}
                    alt="Shoping Cart"
                    width="28px"
                    height="28px"
                    style={{ marginLeft: '10px', marginTop: '0px' }}
                />
            </Link>
            <img src="images/menu.png" className="menu-icon" onClick="onMenuToggle()" />
        </div>
    )
}
