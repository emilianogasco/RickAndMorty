import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Spinner from '../../components/Specific/Spinner/Spinner'
import Alert from '../../components/Specific/Alert/Alert'


const Character = () => {
  const [error, setError] = useState(false);
  const [character, setCharacter] = useState([]);
  const [spinnerDisplay, setSpinnerDisplay] = useState(true);

  let { id } = useParams();
  // console.log(id)
  useEffect(() => {
    setSpinnerDisplay(true)
    axios.get(`${import.meta.env.VITE_CHARACTER_URL}/${id}`)
      .then(({ data }) => {
        console.log(data)
        setCharacter(data)
        setSpinnerDisplay(false)
      })
      .catch((error) => {
        console.log(error)
        setSpinnerDisplay(true)
        setError(true)
      })
      .finally()

  }, []);

  return (
    <>
      <section className="" >{/* style="background-color: #f4f5f7;"*/}
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-8 mb-4 mb-lg-0">
              <div className="card mb-3" style={{ borderRadius: '1rem' }}>
                <div className="row g-0">
                  {spinnerDisplay ? <Spinner display={spinnerDisplay} /> :
                    <>
                      <div className="col-md-4 gradient-custom text-center ">
                        <img src={character.image} alt="Avatar" className="img-fluid my-3 w-75 " style={{ borderRadius: '50%' }} />
                        <h5>{character.name}</h5>
                        <p><i className={`bi bi-circle-fill text-${character.status}`}></i> {character.status}</p>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body p-3">
                          <h6>Information</h6>
                          <hr className=" mb-4" />
                          <div className="row pt-1">
                            <div className="col-6 col-md-4 mb-3">
                              <h6>Origin</h6>
                              <p className="text-muted">{character.origin.name}</p>
                            </div>
                            <div className="col-6 col-md-4 mb-3">
                              <h6>species</h6>
                              <p className="text-muted">{character.species}</p>
                            </div>
                            <div className="col-6 col-md-4 mb-3">
                              <h6>Location</h6>
                              <p className="text-muted">{character.location.name}</p>
                            </div>
                          </div>
                          <h6>Episode</h6>
                          <hr className="mb-4" />
                          <div className="row pt-1">
                            {character.episode.map(
                              element => {
                                const parts = element.split('/');
                                const lastPart = parts[parts.length - 1];
                                return (
                                  <div className="col-12 col-md-3" key={lastPart}>
                                    <Link to={element} className='text-decoration-none' >Episode {lastPart}</Link>
                                  </div>
                                )

                              }

                            )}

                          </div>

                        </div>
                        {/* <div className="d-flex justify-content-start">
                            <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                            <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                            <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                          </div> */}

                      </div>
                    </>
                  }

                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>

  )
}

export default Character