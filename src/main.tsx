import { HeroUIProvider } from "@heroui/react"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles.css"
import Header from "./components/header.tsx"
import Home from "./pages/home.tsx"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <HeroUIProvider>
                <Header />
                <Home />
        </HeroUIProvider>
    </StrictMode>
)
