import SpotlightCard from '../components/spotlight_card'
import ToolsCarousel from '../components/tools_carousel'
import skills from '../data/skills_data.json'
import { Image, Tooltip } from '@heroui/react'
export default function SkillsGrid() {

  return (
    <div className="dark:bg-default-100/65 bg-default-100 bg-clip-padding px-12 md:px-24 py-12 flex flex-col gap-16" id="skills">
      <div className="flex flex-col gap-16">
        <div>
          <span className="flex items-center justify-start mt-6 hover:scale-110 transition group">
            <span className="h-0.5 flex-1 bg-linear-to-r from-transparent dark:to-gray-600"></span>
            <span className="shrink-0 px-8 text-gray-400 tx-xl lg:text-2xl font-semibold">Some <span className='bg-linear-to-r from-[#bc13fe] to-[#DE89FF] bg-clip-text text-transparent'>Languages, Frameworks and Tools</span> I use to build my projects</span>
            <span className="h-0.5 flex-1 bg-linear-to-l from-transparent dark:to-gray-600"></span>
          </span>
        </div>
        <ToolsCarousel />
      </div>
    <div className=" grid md:grid-cols-2 lg:grid-cols-4 md:grid-rows-1 gap-6">
      <div className="flex flex-col justify-center items-center">
        LANGUAGES
        <SpotlightCard>
          {skills.languages.map(skill => (
            <div key={skill.name}>
              <Tooltip content={skill.name} showArrow={true}>
                <Image src={`assets/${skill.logo}`} alt={skill.name} className=" w-10 h-10 object-contain hover:scale-110 transition-transform duration-300" radius="md" />
              </Tooltip>
            </div>
          ))}
        </SpotlightCard>
      </div>
      <div className="flex flex-col justify-center items-center">
        FRONTEND
        <SpotlightCard>
            {skills.frontend.map(skill => (
              <div key={skill.name}>
                <Tooltip content={skill.name} showArrow={true}>
                  <Image src={`assets/${skill.logo}`} alt={skill.name} className=" w-10 h-10 object-contain hover:scale-110 transition-transform duration-300" radius="md" />
                </Tooltip>
              </div>
            ))}
        </SpotlightCard>
      </div>
      <div className="flex flex-col justify-center items-center">
        BACKEND
        <SpotlightCard>
            {skills.backend.map(skill => (
              <div key={skill.name}>
                <Tooltip content={skill.name} showArrow={true}>
                  <Image src={`assets/${skill.logo}`} alt={skill.name} className=" w-10 h-10 object-contain hover:scale-110 transition-transform duration-300" radius="md" />
                </Tooltip>
              </div>
            ))}
        </SpotlightCard>
      </div>
      <div className="flex flex-col justify-center items-center">
        CLOUD
        <SpotlightCard>
            {skills.cloud.map(skill => (
              <div key={skill.name}>
                <Tooltip content={skill.name} showArrow={true}>
                  <Image src={`assets/${skill.logo}`} alt={skill.name} className=" w-10 h-10 object-contain hover:scale-110 transition-transform duration-300" radius="md" />
                </Tooltip>
              </div>
            ))}
        </SpotlightCard>
      </div>
    </div>
    </div>
  )
}
