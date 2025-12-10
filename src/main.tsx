import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {HeroUIProvider} from "@heroui/react";
import './index.css'
import Home from './routes/home/home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <Home />
    </HeroUIProvider>
  </StrictMode>,
)
