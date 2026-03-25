import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles.css"
import About from "./pages/about.tsx"
import Home from "./pages/home.tsx"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
            <Home />
            <About />
    </StrictMode>
)
