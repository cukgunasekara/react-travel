
import React, { useState } from "react"
import Header from "./Header"
import "./navbar.css"
import { FaTimes } from "react-icons/fa"
import { FaBars } from "react-icons/fa"




import { Link } from "react-router-dom"


const Navbar1 = () => {
  
  const [click, setClick] = useState(false)
  
  return (

    <>
  <Header/>
   
   <section className='navbar'>
    <header className='headersec'>
      <div className="nav flexSB">
       
        <div className='nav'>
        <ul className={click ? "mobile-nav" : "nav "} onClick={() => setClick(false)}>
              <li> <Link to= '/'>Home </Link></li>
              <li> <Link to= '/about'>About </Link></li>
              <li> <Link to= '/packages'>Packages </Link></li>
              <li> <Link to= '/team'>Team </Link></li>
              <li> <Link to= '/pages'>Pages </Link></li>
              <li> <Link to= '/news'>News </Link></li>
              <li> <Link to= '/contact'>Contact us </Link></li>
             
              
            </ul>
            <div className="start">
              <div className="button">BOOK NOW</div>
            </div>
          </div>
          <div className='button flex'>
            
            <button className='toggle' onClick={() =>setClick(!click)}  >
              {click ? <FaTimes  className="icon"/> :<FaBars className="icon" />}
          
            </button>
          </div>
       
         
          
          </div> 

    </header>

   </section>
   </>
   
  )
}

export default Navbar1