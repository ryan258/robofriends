import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
  console.log('card list rerendered')
  // if (true) {
  //   throw new Error('boop....')
  // }
  const cardsArray = robots.map((robot) => {
    return <Card robot={robot} key={robot.id} />
  })
  return <div>{cardsArray}</div>
}

export default CardList
