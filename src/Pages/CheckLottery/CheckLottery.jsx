import React, { useContext, useState } from 'react'
import Dozens from '../../Components/Dozens/Dozens'
import { LotteryContex } from '../../Contexts/lottery'
import './CheckLottery.css'

const CheckLottery = () => {
  const {lottery} = useContext(LotteryContex)
  const [gamesMade, setGamesMade] =  useState([])
  const dozensDrawn = [1,2,3,4,5,6]

  const handleGamesMade = (game) => {
    setGamesMade([...gamesMade, game])
    console.log(gamesMade)
  }

  const handleDozensDrawn = (dozen) => {
    return dozensDrawn.includes(dozen)
  }

  return (
    <div className='CheckLottery'>
      <h2>{lottery}</h2>

      <div className="change_contest_container">
        <label htmlFor="change_contest">Concurso</label>
        <select className='change_contest' id='change_contest'>
          <option value="1234">1234</option>
          <option value="2345">1234</option>
          <option value="3546">1234</option>
        </select>
      </div>

      <div className="play_container">
        <h2>Faça o seu jogo</h2>

        <Dozens lottery={lottery} handleGamesMade={handleGamesMade} />

        <div className="games_made">
          {
            gamesMade &&
              gamesMade.map((game,i) => (
                <div className="game" key={i}>
                  {
                    game.map( (item, i) => (
                      <span className={handleDozensDrawn(item) ? 'drawn' : ''} key={i}>{item}</span>
                    ))
                  }
                </div>
              ))
          }
        </div>
      </div>
    </div>
  )
}

export default CheckLottery