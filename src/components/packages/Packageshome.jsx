import React from "react"
import Back from  '../common/navbar/back/Back'
import Packagecard  from "./Packagecard"
import Packages from "./Packages"

const Packageshome = () => {
  return (
    <>
      <Back title='Explore Packages' />
      <Packagecard />
     <Packages/>
    </>
  )
}

export default Packageshome
