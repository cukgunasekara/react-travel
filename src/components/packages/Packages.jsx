import React from "react"
import "./packages.css"
import { online } from '../../dummydata'
import Heading from '../common/navbar/heading/Heading'

const Packages = () => {
  return (
    <>
      <section className='online'>
        <div className='container'>
          <Heading subtitle='PACKAGES' title='Enjoy your life.' />
          <div className='content grid3'>
            {online.map((val) => (
              <div className='box '>
                <div className='img'>
                  <img src={val.imgSrc} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h4>{val.desttitle}</h4>
                <span>{val.location}</span>
                <span>{val.grade}</span>
                
                <h5>{val.fees}</h5>
             <p>  {val.discription}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Packages
