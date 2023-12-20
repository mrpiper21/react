import { useState } from 'react'

const Square = ({ value, onSquareclick }) => {

  return (
    <button
        className='background'
        onClick={onSquareclick}
    >
        {value}
    </button>
  )
}

export default Square
