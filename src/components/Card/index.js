import React from 'react'

import './styles.css'

const Card = ({detective}) => {
  return (
    <div className="detective-card shadow">
      <div className="image">
        <img src={detective.image} alt={detective.name}/>
      </div>
      <div className="detective-card-info">
        <h2>{detective.name}</h2>
        <p>{detective.description}</p>
      </div>
    </div>
  )
}


const Cards = ({detectives}) => {
  return (
    <div className="cards">
      {detectives.map(detective => <Card detective={detective} />)}
    </div>
  )
}

export default Cards