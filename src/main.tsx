import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {HeroUIProvider} from "@heroui/react";
import './index.css'
import Home from './routes/home/landing.tsx'
import Navbar from './components/navbar.tsx'
import Footer from './components/footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <main>
        <Navbar />
          <Home />
        <Footer />
      </main>
    </HeroUIProvider>
  </StrictMode>,
)
