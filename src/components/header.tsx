import { Button, Link } from "@heroui/react"
import { useState } from "react"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
                <div className="flex items-center gap-4">
                    <Button
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle menu"
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span className="sr-only">Menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <title>menu</title>
                            {isMenuOpen ? (
                                <path
                                    d="M6 18L18 6M6 6l12 12"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                />
                            ) : (
                                <path
                                    d="M4 6h16M4 12h16M4 18h16"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                />
                            )}
                        </svg>
                    </Button>
                    <div className="flex items-center gap-3">
                        <p className="font-bold">DAMOKLES</p>
                    </div>
                </div>
                <ul className="hidden items-center gap-4 md:flex">
                    <li>
                        <Link className="no-underline" href="#">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className="no-underline" href="#">
                            Career
                        </Link>
                    </li>
                    <li>
                        <Link className="no-underline" href="#">
                            Stack
                        </Link>
                    </li>
                    <li>
                        <Link className="no-underline" href="#">
                            Certifications
                        </Link>
                    </li>
                </ul>
                <div className="hidden items-center gap-4 md:flex">
                    <Link className="no-underline" href="#">
                        Login
                    </Link>
                    <Button>Sign Up</Button>
                </div>
            </header>
            {!!isMenuOpen && (
                <div className="border-t border-separator md:hidden">
                    <ul className="flex flex-col gap-2 p-4">
                      <li>
                          <Link className="no-underline block py-2" href="#">
                              About
                          </Link>
                      </li>
                      <li>
                          <Link className="no-underline block py-2" href="#">
                              Career
                          </Link>
                      </li>
                      <li>
                          <Link className="no-underline block py-2" href="#">
                              Stack
                          </Link>
                      </li>
                      <li>
                          <Link className="no-underline block py-2" href="#">
                              Certifications
                          </Link>
                      </li>
                        <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
                            <Link className="block py-2" href="#">
                                Login
                            </Link>
                            <Button className="w-full">Sign Up</Button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}
