import { HeroUIProvider } from "@heroui/react"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles.css"
import App from "./App.tsx"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <HeroUIProvider>
            <App />
        </HeroUIProvider>
    </StrictMode>
)
