import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import ThemeSwitcher from "./theme_switcher";

export default function Header() {
    return (
        <Navbar className=' flex-1 bg-transparent' maxWidth="2xl">
          <NavbarBrand>
            <p className="font-bold text-inherit">DAMOKLES</p>
          </NavbarBrand>
          <NavbarContent justify="end">
            <NavbarItem>
              <ThemeSwitcher />
            </NavbarItem>
          </NavbarContent>
      </Navbar>
    );
}