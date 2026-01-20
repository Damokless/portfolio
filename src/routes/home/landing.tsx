import { Button, Link, Image, Card, CardBody, Tab, Tabs } from '@heroui/react'
import IconMail from '../../components/icons/IconMail'
import IconCalendar from '../../components/icons/IconCalendar'
import ToolsCarousel from '../../components/tools_carousel/tools_carousel'
import SkillsGrid from '../../components/skills_grid/skills_grid'
import SocialsButtons from '../../components/socials_buttons'
import EducationTab from '../../components/career/education_tab'

export default function Home() {
  return (
    <div>
        <div className="h-[calc(100svh-4rem)] flex justify-center items-center gap-8">
          <div>
            <Image src="images/me.webp" alt="Damokles" height={400} width={200} className="shadow-lg" />
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
                I turn coffee into code, Trying to build pixel-perfect apps with innovative solutions and suffering to
                find the best way to solve problems mainly with the help of the JS ecosystem.
              </p>
            </div>
            <div className="w-fit flex flex-col gap-4">
              <Card radius="sm" className="flex flex-row h-full w-fit p-1 items-center justify-center gap-2">
                <Button
                  as={Link}
                  href="mailto:bouzon.alexandre@gmail.com"
                  target="_blank"
                  variant="ghost"
                  size="sm"
                  radius="sm"
                  startContent={<IconMail strokeColor="white" width={24} height={24} />}
                >
                  Contact Me
                </Button>
                <div className=" w-1 h-1 bg-white rounded-full"></div>
                <Button
                  as={Link}
                  href="https://cal.com/damokles/rdvvisio"
                  target="_blank"
                  variant="ghost"
                  size="sm"
                  radius="sm"
                  startContent={<IconCalendar strokeColor="white" width={24} height={24} />}
                >
                  Book A Call
                </Button>
              </Card>
              <span className="flex items-center justify-start mt-6 hover:scale-110 transition group shadow-lg">
                <span className="h-px flex-1 bg-linear-to-r from-transparent dark:to-gray-600"></span>
                <span className="shrink-0 px-2 text-gray-400 text-xs">
                  {' '}
                  <span className=" hidden group-hover:inline-block">👇🏼</span>If You need more ways to contact me
                  <span className=" hidden group-hover:inline-block">👇🏼</span>
                </span>
                <span className="h-px flex-1 bg-linear-to-l from-transparent dark:to-gray-600"></span>
              </span>
              <div className="flex w-full justify-evenly">
                <SocialsButtons />
              </div>
            </div>
          </div>
      </div>
      <div className="dark:bg-default-100/65 bg-default-100 bg-clip-padding px-24 py-12 flex flex-col gap-16">
        <div className="flex flex-col">
          <Card className="max-w-full ">
            <CardBody className="overflow-hidden">
              <Tabs fullWidth aria-label="Tabs form" size="md">
                <Tab key="experiences" title="EXPERIENCES">
                  <div>ehehe</div>
                </Tab>
                <Tab key="educations" title="EDUCATIONS">
                  <EducationTab />
                </Tab>
              </Tabs>
            </CardBody>
          </Card>
        </div>
        <ToolsCarousel />
        <SkillsGrid />
      </div>
    </div>
  )
}
