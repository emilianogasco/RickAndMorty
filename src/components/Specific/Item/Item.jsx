import React from 'react'
import HorizontalCard from '../HorizontalCard/HorizontalCard'

const Item = ({name,species,img,status}) => {
  return (
    <>
    
    <div className="col-12  col-md-6 col-xl-4">
      <HorizontalCard name={name} species={species} img={img} status={status}/>
    </div>
    </>
  )
}

export default Item