import { Button, Link } from "@heroui/react"
import { IconMenu2, IconX } from "@tabler/icons-react"
import { useEffect, useRef, useState } from "react"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)

    // ferme le menu sur Escape
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isMenuOpen) {
                setIsMenuOpen(false)
                buttonRef.current?.focus()
            }
        }
        document.addEventListener("keydown", handleKeyDown)
        return () => document.removeEventListener("keydown", handleKeyDown)
    }, [isMenuOpen])

    // déplace le focus vers le premier lien à l'ouverture
    useEffect(() => {
        if (isMenuOpen) {
            const firstLink = menuRef.current?.querySelector("a")
            firstLink?.focus()
        }
    }, [isMenuOpen])

    const closeMenu = () => {
        setIsMenuOpen(false)
        buttonRef.current?.focus()
    }

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <div className="flex items-center gap-4">
                    <Button
                        aria-controls="mobile-menu"
                        aria-expanded={isMenuOpen}
                        aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                        className="md:hidden bg-transparent"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        ref={buttonRef}>
                        {isMenuOpen ? (
                            <IconX size={36} stroke={2} />
                        ) : (
                            <IconMenu2 size={36} stroke={2} />
                        )}
                    </Button>
                    <div className="flex items-center gap-3">
                        <p className="font-bold">DAMOKLES</p>
                    </div>
                </div>
                <ul className="hidden items-center gap-4 md:flex">
                    <li>
                        <Link className="no-underline" href="#about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className="no-underline" href="#career">
                            Career
                        </Link>
                    </li>
                    <li>
                        <Link className="no-underline" href="#stack">
                            Stack
                        </Link>
                    </li>
                    <li>
                        <Link className="no-underline" href="#certifications">
                            Certifications
                        </Link>
                    </li>
                </ul>
            </header>

            {!!isMenuOpen && (
                <div
                    aria-label="Menu de navigation"
                    className="border-t border-separator md:hidden"
                    id="mobile-menu"
                    ref={menuRef}
                    role="dialog">
                    <ul className="flex flex-col justify-center items-center gap-2 p-4">
                        <li>
                            <Link
                                className="no-underline block py-2"
                                href="#about"
                                onClick={closeMenu}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="no-underline block py-2"
                                href="#career"
                                onClick={closeMenu}>
                                Career
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="no-underline block py-2"
                                href="#stack"
                                onClick={closeMenu}>
                                Stack
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="no-underline block py-2"
                                href="#certifications"
                                onClick={closeMenu}>
                                Certifications
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}
