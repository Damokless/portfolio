import { Navbar, NavbarBrand } from "@heroui/react";

export default function Header() {
    return (
        <Navbar className=' flex-1 bg-transparent' maxWidth="2xl">
          <NavbarBrand>
            <p className="font-bold text-inherit">DAMOKLES</p>
          </NavbarBrand>
          {/*<NavbarContent justify="end">
            <NavbarItem>
              <ThemeSwitcher />
            </NavbarItem>
          </NavbarContent>*/}
      </Navbar>
    );
}