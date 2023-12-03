import React from 'react'
import HorizontalCard from '../HorizontalCard/HorizontalCard'

const Item = ({name,species,img}) => {
  return (
    <>
    
    <div className="col-12 col-md-4">
      <HorizontalCard name={name} species={species} img={img}/>
    </div>
    </>
  )
}

export default Item