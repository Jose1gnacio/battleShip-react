import React from 'react'
import './styles.css'

const Ship = ({ type, size }) => {
  return (
    
        
      <div className={type} draggable='true'></div>
    
  )
}

export default Ship
