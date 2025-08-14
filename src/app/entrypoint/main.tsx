import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { MainLayout } from '../layout/MainLayout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  </StrictMode>
)
 