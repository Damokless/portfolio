import { MantineProvider } from "@mantine/core"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import Layout from "./layout/layout"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <MantineProvider>
            <Layout>
                <App />
            </Layout>
        </MantineProvider>
    </React.StrictMode>
)
