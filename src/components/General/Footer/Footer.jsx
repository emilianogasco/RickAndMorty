import React from 'react'
import ButtonNav from '../../Specific/ButtonNav/ButtonNav'

const Footer = () => {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <ButtonNav texto={'Home'} />
          <ButtonNav texto={'Character'} />
        </ul>
        <p className="text-center text-muted">© 2023, <a href="https://github.com/emilianogasco" className='text-decoration-none text-muted'>Emiliano Gasco</a></p>
      </footer>
    </div>
  )
}

export default Footer