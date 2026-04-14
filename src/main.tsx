import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles.css"
import Footer from "./components/footer.tsx"
import Header from "./components/header.tsx"
import About from "./pages/about.tsx"
import Career from "./pages/career.tsx"
import Certifications from "./pages/certifications.tsx"
import Home from "./pages/home.tsx"
import Socials from "./pages/socials.tsx"
import Stack from "./pages/stack.tsx"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Header />
        <Home />
        <About />
        <Career />
        <Stack />
        <Certifications />
        <Socials />
        <Footer />
    </StrictMode>
)
