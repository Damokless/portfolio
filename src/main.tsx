import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {HeroUIProvider} from "@heroui/react";
import './index.css'
import Home from './routes/home/home.tsx'
import Navbar from './components/navbar.tsx'
import Footer from './components/footer.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <Navbar />
      <Home />
      <Footer />
    </HeroUIProvider>
  </StrictMode>,
)
