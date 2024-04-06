import React from "react"
import Back from '../../navbar/back/Back'
import TeamCard from "./Teamcard"
import "./team.css"
import Awrapper from '../../about/Awrapper'
import '../../about/about.css'

const Team = () => {
  return (
    <>
      <Back title='Team' />
      <section className='team padding'>
        <div className='container grid'>
          <TeamCard />
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default Team