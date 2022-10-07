import React from 'react'
import AvantGrandText from './AvantGrandText'
import AvantGrand from './AvantGrand'
import  {AirPods}  from "../../../assets/images/tagheuer/01.crown/is-sequences/large/";


const index = () => {
  return (
    <>
    <AvantGrandText />
    <AvantGrand images={AirPods} />
    </>
  )
}

export default index