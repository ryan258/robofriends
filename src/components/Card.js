import React from 'react'

const Card = ({ robot: { id, name, username, email } }) => {
  // console.log(name)
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="a mecha-manny" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}

export default Card
