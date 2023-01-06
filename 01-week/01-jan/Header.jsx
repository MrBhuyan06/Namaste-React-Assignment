import React from 'react'
import logo from './logo.png'
import {FaUserCircle} from 'react-icons/fa'
import './header.css'


export const Header = () => {
  return (
    <header className="">
        <div className="container header__container">
            <img  src={logo} alt="logo is loading" />

            <div>
              <form action="">
                <input type="text" placeHolder='search here' />
                <button>Search</button>
              </form>
            </div>

            <div className="avtar">
              <FaUserCircle  className="avtor"/>
            </div>
        </div>

    </header>
  )
}
