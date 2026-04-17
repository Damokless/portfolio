import { Button, Link } from "@heroui/react"
import { IconMenu2 } from "@tabler/icons-react"
import { useState } from "react"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <div className="flex items-center gap-4">
                    <Button
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle menu"
                        className="md:hidden bg-transparent"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span className="sr-only">Menu</span>
                        <IconMenu2 size={36} stroke={2} />
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
                <div className="border-t border-separator md:hidden">
                    <ul className="flex flex-col justify-center items-center gap-2 p-4">
                      <li>
                          <Link className="no-underline block py-2" href="#about">
                              About
                          </Link>
                      </li>
                      <li>
                          <Link className="no-underline block py-2" href="#career">
                              Career
                          </Link>
                      </li>
                      <li>
                          <Link className="no-underline block py-2" href="#stack">
                              Stack
                          </Link>
                      </li>
                      <li>
                          <Link className="no-underline block py-2" href="#certifications">
                              Certifications
                          </Link>
                      </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}
