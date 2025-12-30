import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";

export default function Header() {
    return (
        <Navbar className=' flex-1 bg-transparent' maxWidth="2xl">
          <NavbarBrand>
            <p className="font-bold text-inherit">DAMOKLES</p>
          </NavbarBrand>
          <NavbarContent justify="end">
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                Dark/light
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    );
}