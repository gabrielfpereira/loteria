import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../Pages/Home'
import CheckLottery from '../Pages/CheckLottery'

const Routes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/check" element={<CheckLottery />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Routes