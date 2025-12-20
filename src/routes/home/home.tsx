import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Image, Card, Tooltip, Snippet } from '@heroui/react'
import IconLinkedin from '../../components/icons/IconLinkedin'
import IconGithub from '../../components/icons/IconGithub'
import IconDiscord from '../../components/icons/IconDiscord'
import IconFile from '../../components/icons/IconFile'
import IconMail from '../../components/icons/IconMail'
import IconCalendar from '../../components/icons/IconCalendar'

export default function Home() {
  return (
    <>
      <div className="h-svh flex flex-col">
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
            <Image src="images/me.webp" alt="Damokles" height={400} width={200} />
          </div>
          <div className="flex flex-col gap-12">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold">
                Hello there ! I'm{' '}
                <span className=" bg-linear-to-r from-[#bc13fe] to-[#DE89FF] bg-clip-text text-transparent">
                  Damokles
                </span>
                . <br />A Full-stack developer.
              </h1>
              <p className=" text-gray-400 text-wrap w-3xl">
                I turn coffee into code, Trying tp Building pixel-perfect apps with innovative solutions and suffering
                to find the best way to solve problems mainly with the help of the JS ecosystem.
              </p>
            </div>
            <div className="w-fit flex flex-col gap-4">
            <Card radius="sm" className='flex flex-row h-full w-fit p-1 items-center justify-center gap-2'>
              <Button as={Link} href="mailto:bouzon.alexandre@gmail.com" target="_blank" variant='ghost' size="sm" radius="sm" startContent={<IconMail strokeColor='white' width={24} height={24} />}>Contact Me</Button>
              <div className=" w-1 h-1 bg-white rounded-full"></div>
              <Button as={Link} href="https://cal.com/damokles/rdvvisio" target="_blank" variant='ghost' size="sm" radius="sm" startContent={<IconCalendar strokeColor='white' width={24} height={24} />}>Book A Call</Button>
            </Card>
            <span className="flex items-center justify-start mt-6 hover:scale-110 transition group">
              <span className="h-px flex-1 bg-linear-to-r from-transparent dark:to-gray-600"></span>
              <span className="shrink-0 px-2 text-gray-400 text-xs"> <span className=' hidden group-hover:inline-block'>👇🏼</span>If You need more ways to contact me<span className=' hidden group-hover:inline-block'>👇🏼</span></span>
              <span className="h-px flex-1 bg-linear-to-l from-transparent dark:to-gray-600"></span>
            </span>
            <div className="flex w-full justify-evenly">
              <Button as={Link} href="https://www.linkedin.com/in/alexandre-bouzon/" target="_blank" isIconOnly variant="flat" className=" hover:text-[#bc13fe] hover:scale-110">
                <IconLinkedin />
              </Button>
              <Button as={Link} href="https://github.com/Damokless" target="_blank" isIconOnly variant="flat" className=" hover:text-[#bc13fe] hover:scale-110">
                <IconGithub />
              </Button>
              <Tooltip content="damokles_" showArrow={true}>
                <Button isIconOnly variant="flat" className=" hover:text-[#bc13fe] hover:scale-110">
                  <IconDiscord />
                </Button>
              </Tooltip>
              <Button as={Link} href="https://docs.google.com/document/d/17wHqqEzjqLWKSFcKFtiyubcKa1VNgg140MzolJ454wA/edit?usp=sharing" target="_blank" isIconOnly variant="flat" className=" hover:text-[#bc13fe] hover:scale-110">
                <IconFile />
              </Button>
            </div>
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
        Skills - tools (Languages, Frameworks, Libraries, Tools)
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
  )
}
