import React from 'react'
import './navbar.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";


const Header = () => {
  return (
    <section className='head'>
        <div className="container flexSB">
            <div className="logo">
            <a href="#"><h1>DAMBLEDORE</h1></a>
                
            </div>
            <div className="social">
            <FaFacebook className="icon"/>
            <FaInstagramSquare className="icon" />
            <FaTwitter className="icon" />
            <IoLogoYoutube  className="icon"/>


            </div>
        </div>
    </section>
  )
}

export default Header