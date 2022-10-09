import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LotteryContex } from '../../Contexts/lottery'
import './Home.css'

const Home = () => {
  const loterias = ['Megasena', 'Lotofácil', 'Lotofederal']
  const {setLottery} = useContext(LotteryContex)

  return (
    <div className='container'>
      <div className="home">
        { loterias.map((lotto,i) => (
          <Link to='/check'  key={i} className='btn_lotto' onClick={() => setLottery(lotto)} >
            {lotto}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home