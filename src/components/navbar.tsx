import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@heroui/react";

export default function Header() {
    return (
        <Navbar isBordered className=' bg-transparent' maxWidth="xl">
          <NavbarBrand>
            <p className="font-bold text-inherit">DAMOKLES</p>
          </NavbarBrand>
          <NavbarContent justify="end">
            <NavbarItem>
              <Link href="#about" className="text-[#bc13fe]">About</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#career">Career</Link>
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