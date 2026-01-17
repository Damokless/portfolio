import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@heroui/react";

export default function Header() {
    return (
        <Navbar className=' flex-1 bg-transparent' maxWidth="xl">
          <NavbarBrand>
            <p className="font-bold text-inherit">DAMOKLES</p>
          </NavbarBrand>
          <NavbarContent justify="end">
            <NavbarItem>
              <Link href="#about">About</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#projects">Career</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#skills">Skills</Link>
            </NavbarItem>
            {/*<NavbarItem>
              <ThemeSwitcher />
            </NavbarItem>*/}
          </NavbarContent>
      </Navbar>
    );
}