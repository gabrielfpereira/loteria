import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const loterias = ['Megasena', 'Lotofácil', 'Lotofederal']

  return (
    <div className='container'>
      <div className="home">
        { loterias.map((lotto,i) => (
          <Link to='/check'  key={i} className='btn_lotto' >
            {lotto}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home