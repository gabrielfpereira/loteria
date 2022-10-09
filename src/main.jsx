import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { LotteryProvider } from './Contexts/lottery'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LotteryProvider>
      <App />
    </LotteryProvider>
  </React.StrictMode>
)
