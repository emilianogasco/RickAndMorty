import React from 'react'
import ButtonNav from '../../Specific/ButtonNav/ButtonNav'
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container ">
          
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <ButtonNav texto={'Home'} />
              <ButtonNav texto={'Character'} />
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar