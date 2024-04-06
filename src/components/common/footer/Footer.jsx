import React from 'react'
import './footer.css'


const Footer = () => {
    
  return (
    <>
    <section className="newletter">
        

        <div className="container flexSB">
        <div className="left row">
                <small>
                    KEEP IN TOUGH
                </small>
                <h2>Travel with us</h2>
                </div>
                <div className="right row">
                <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
                </div>
        </div>

    </section>
    <footer>
      <div className="box-container">
        <div className="box">
          <h1>DUMBLEDORE</h1>
          <div className="social">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
          </div>
        </div>
        <div className="box">
        <h3>contact us</h3>
        <a href="#" className="link"> <i className="fas fa-phone"></i>+94 11 223 3567</a>
        <a href="#" className="link"> <i className="fas fa-phone"></i>+94 11 223 3568</a>
        <a href="#" className="link"> <i className="fas fa-envelope"></i>dumbledore@gmail.com</a>
        <a href="#" className="link"> <i className="fa fa-paper-plane"></i>No.22, Kandy road, Colombo</a>
        </div>
        <div className="box">
          <h3> OUR AGENCY</h3>
          <a href="#" className="link"> <i className="fas fa-arrow-right"></i>Services</a>
          <a href="#" className="link"> <i className="fas fa-arrow-right"></i>Agency</a>
          <a href="#" className="link"> <i className="fas fa-arrow-right"></i>Tourism</a>
          <a href="#" className="link"> <i className="fas fa-arrow-right"></i>Insurance</a>
          <a href="#" className="link"> <i className="fas fa-arrow-right"></i>Payment</a>
        </div>
        <div className="box">
          <h3> PARTNERS</h3>
          <a href="#" className="link"> <i className="fas fa-arrow-right"></i>Booking.com</a>
          <a href="#" className="link"> <i className="fas fa-arrow-right"></i>Rentcard</a>
          <a href="#" className="link"> <i className="fas fa-arrow-right"></i>Hostelworld</a>
          <a href="#" className="link"> <i className="fas fa-arrow-right"></i>Trivago</a>
          <a href="#" className="link"> <i className="fas fa-arrow-right"></i>Tripadvisor</a>
        </div>
      </div>
    </footer>
    <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved | This template is made with <i className='fa fa-heart'></i> by charu
        </p>
      </div>
    </>
  )
}

export default Footer
