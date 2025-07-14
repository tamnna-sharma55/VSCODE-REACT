import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Home from './Home.jsx'
// import Counter from './Counter.jsx'
// import Controlled from './Controlled.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Home/> */}
    {/* <Counter/> */}
    {/* <Controlled/> */}
  </StrictMode>,
)
