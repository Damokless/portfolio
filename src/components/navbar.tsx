import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";

export default function Header() {
    return (
        <Navbar className='bg-transparent'>
          <NavbarBrand>
            <p className="font-bold text-inherit">DAMOKLES</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="#">
                Career
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link aria-current="page" href="#">
                skills
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Certifications
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Projects
              </Link>
            </NavbarItem>
          </NavbarContent>
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