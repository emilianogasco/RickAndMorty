import React from 'react'

const HorizontalCard = ({name,species,img, status}) => {
  return (
      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img} className="img-fluid rounded-start" alt={name} />
          </div>
          <div className="col-md-8 ">
            <div className="card-body text-start ">
              <h5 className="card-title ">{name}</h5>
              <p className="card-text fw-bold"><i class={`bi bi-circle-fill text-${status}`}></i> {status} - {species}</p>
              {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
            </div>
          </div>
        </div>
      </div>
  )
}

export default HorizontalCard