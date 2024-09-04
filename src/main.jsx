import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Main from './layout/Main.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-[1440px] mx-auto bg-black text-white'>
      <Main />
    </div>
  </StrictMode>,
)
