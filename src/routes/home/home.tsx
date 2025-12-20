import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Image } from "@heroui/react";
import IconLinkedin from "../../components/icons/Iconlinkedin";
import IconGithub from "../../components/icons/IconGithub";
import IconDiscord from "../../components/icons/IconDiscord";
import IconFile from "../../components/icons/IconFile";

export default function Home() {
    return (
            <><div className="h-svh flex flex-col">
            <Navbar>
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
            <div className="mt-8 h-full flex justify-center items-center gap-8">
              <div>
                <Image src="images/me.webp" alt="Damokles" height={400} />
              </div>
              <div className="flex flex-col gap-20">
                <div className=" space-y-6">
                    <h1 className="text-4xl font-bold">Hello there ! I'm Damokles. <br/>A Full-stack developer.</h1>
                    <p className=" text-gray-500 text-wrap w-3xl">I turn coffee into code, Trying tp Building pixel-perfect apps with innovative solutions and suffering to find the best way to solve problems mainly with the help of the JS ecosystem.</p>
                </div>
                <div className=" space-x-2.5">
                  <Button isIconOnly variant="flat" className=" ">
                    <IconLinkedin />
                  </Button>
                  <Button isIconOnly variant="flat">
                    <IconGithub />
                  </Button>
                  <Button isIconOnly variant="flat">
                    <IconDiscord />
                  </Button>
                  <Button isIconOnly variant="flat">
                    <IconFile />
                  </Button>
                </div>
              </div>
            </div>
        </div>
                <Button color="primary" variant="flat">
                  Home
                </Button>
                <Button color="primary" variant="flat">
                  Career ( two sections : Companies that trusted me & Education)
                </Button>
                <Button color="primary" variant="flat">
                  Skills - tools  (Languages, Frameworks, Libraries, Tools)
                </Button>
                <Button color="primary" variant="flat">
                  Certifications
                </Button>
                <Button color="primary" variant="flat">
                  Projects
                </Button>
                <Button color="primary" variant="flat">
                  Contact ( Email, call booking, LinkedIn, GitHub, Resume,)
                </Button>

            </>
    );
}
