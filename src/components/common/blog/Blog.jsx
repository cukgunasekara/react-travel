import React from "react"
import Back from  '../navbar/back/Back'
import Blogcard from "./Blogcard"
import "./blog.css"


const Blog = () => {
  return (
    <>
      <Back title='Blog Posts' />
      <section className='blog padding'>
        <div className='container grid2'>
          <Blogcard />
          
        </div>
      </section>
    </>
  )
}

export default Blog
