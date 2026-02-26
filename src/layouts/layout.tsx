import type { ReactElement } from "react"
import Header from "../components/header.tsx"
export default function Layout({ children }: { children: React.ReactNode }): ReactElement {
    return (
        <div>
            <Header />
            <main className="flex-1 flex justify-center items-center gap-8">{children}</main>
        </div>
    )
}
