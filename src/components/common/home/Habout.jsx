import React from "react"
import Heading from '../navbar/heading/Heading'
import '../../packages/packages.css'
import { packgeCard } from '../../../dummydata'
import Packages from "../../packages/Packages"

const HAbout = () => {
  return (
    <>
      <section className='homeAbout'>
        <div className='container'>
          <Heading subtitle='our courses' title='explore our popular online courses' />

          <div className='coursesCard'>
            
            <div className='grid2'>
              {packgeCard.slice(0, 3).map((val) => (
                <div className='items'>
                  <div className='content flex'>
                    <div className='left'>
                      <div className='img'>
                        <img src={val.cover} alt='' />
                      </div>
                    </div>
                    <div className='text'>
                      <h1>{val.packageName}</h1>
                      <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <label htmlFor=''>(5.0)</label>
                      </div>
                      <div className='details'>
                        {val.courTeacher.map((details) => (
                          <>
                            <div className='box'>
                              <div className='dimg'>
                                <img src={details.dcover} alt='' />
                              </div>
                              <div className='para'>
                                <h4>{details.name}</h4>
                              </div>
                            </div>
                            <span>{details.totalTime}</span>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <button className='outline-btn'>BOOK NOW !</button>
                </div>
              ))}
            </div>
          </div>
        </div>
       <Packages/>
      </section>
    </>
  )
}

export default HAbout
