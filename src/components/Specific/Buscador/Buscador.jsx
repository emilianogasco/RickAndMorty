import React from 'react'

const Buscador = ({ placeHolder, name, setName }) => {

  const hadleInputChange = ({ target }) => {
    setName(target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder={placeHolder}
          value={name}
          onChange={hadleInputChange} />
      </form>

    </>
  )
}

export default Buscador