import { lazy, StrictMode, Suspense } from "react"
import { createRoot } from "react-dom/client"
import "./styles.css"

import Header from "./components/header.tsx"
import About from "./pages/about.tsx"
import Home from "./pages/home.tsx"

// below-the-fold
const Career = lazy(() => import("./pages/career.tsx"))
const Stack = lazy(() => import("./pages/stack.tsx"))
const Certifications = lazy(() => import("./pages/certifications.tsx"))
const Socials = lazy(() => import("./pages/socials.tsx"))
const Footer = lazy(() => import("./components/footer.tsx"))

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Header />
        <main>
            <Home />
            <About />
            <Suspense fallback={null}>
                <Career />
                <Stack />
                <Certifications />
                <Socials />
            </Suspense>
        </main>
        <Footer />
    </StrictMode>
)
