import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppBis from './AppBis.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <AppBis />
  </StrictMode>,
)
