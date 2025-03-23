import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoveOMeter from './LoveOMeter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <LoveOMeter />
    {/* <Love_O_meter /> */}
  </StrictMode>,
)
