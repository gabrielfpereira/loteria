import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Pages/Home/Home'
import CheckLottery from './Pages/CheckLottery/CheckLottery'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/check" element={<CheckLottery />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
