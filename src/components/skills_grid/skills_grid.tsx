import SpotlightCard from '../spotlight_card'
import skills from './skills_data.json'
import { Image, Tooltip } from '@heroui/react'
export default function SkillsGrid() {

  return (
    <div className=" grid md:grid-cols-2 md:grid-rows-2 md:gap-12 gap-6">
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
  )
}
