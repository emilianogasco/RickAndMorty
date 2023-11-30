import React from 'react'

const CardItem = ({ name, status, species, image, gender }) => {
  return (
    <>
      {/* <div class="card" aria-hidden="true">
        <div className="d-flex justify-content-center mt-4" >
          <div class="spinner-grow text-primary " role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title placeholder-glow">
            <span class="placeholder col-6"></span>
          </h5>
          <p class="card-text placeholder-glow">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-8"></span>
          </p>
          <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
        </div>
      </div> */}
      <div className="card" >
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Species: {species}</p>
          <p className="card-text">Gender: {gender}</p>
          <p className="card-text">Status: <span className={`badge rounded-pill text-bg-${status}`}>{status}</span></p>
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
    </>
  )
}

export default CardItem