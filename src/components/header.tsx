import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react"
import type { ReactElement } from "react"

export default function Header(): ReactElement {
    return (
        <header className="bg-transparent sticky top-0 z-10">
            <Navbar className=" bg-transparent" isBlurred={true} isBordered={true} maxWidth="2xl">
                <NavbarBrand>
                    <p className="font-bold text-inherit">DAMOKLES</p>
                </NavbarBrand>
                <NavbarContent
                    className="hidden sm:flex gap-4 text-sm font-medium  uppercase tracking-widest"
                    justify="center">
                    <NavbarItem>
                        <Link
                            className="hover:text-[#bc13fe] transition-colors"
                            color="foreground"
                            href="#">
                            About
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Career
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Skills
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Certifications
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </header>
    )
}
