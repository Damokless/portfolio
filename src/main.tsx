import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {HeroUIProvider} from "@heroui/react";
import './index.css'
import Landing from './pages/landing.tsx'
import Navbar from './components/navbar.tsx'
import Footer from './components/footer.tsx'
import Career from './pages/career.tsx'
import Skills from './pages/skills.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <main>
        <Navbar />
          <Landing />
          <Career />
          <Skills />
        <Footer />
      </main>
    </HeroUIProvider>
  </StrictMode>,
)
