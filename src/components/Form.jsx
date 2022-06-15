import React, {useEffect, useState} from 'react'

const Form = ({setSearchLocation}) => {

  const searchLocation = e => {
    e.preventDefault()
    setSearchLocation(e.target.children[0].value)
  }
  return (
    <form onSubmit={searchLocation} action="">
      <input type="text" />
      <button>Search</button>
    </form>
  )
}

export default Form