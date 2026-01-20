import { Accordion, AccordionItem, Avatar } from '@heroui/react'
import experiences from '../../data/experiences_data.json'
import IconBuilding from '../icons/IconBuilding'

export default function experiencesTab() {
  return (
    <ul role="list" className="m-8 max-w-3xl">
      {experiences.map((company, index) => (
        <li key={index} className="group relative flex flex-col py-4 pl-14 last:pb-0">
          <div className="absolute bottom-0 left-[calc(1.5rem-0.5px)] top-0 w-px bg-default-400 group-first:top-3"></div>
          <div className="absolute left-0 top-2 h-12 w-12 rounded-full bg-content1 border border-default-400 p-0.5 overflow-hidden">
            <Avatar src={`/images/${company.logo}`} alt={company.name} showFallback fallback={<IconBuilding width={24} height={24} />} className="h-full w-full object-cover rounded-full" />
          </div>
          <h3 className="font-display text-2xs/6 order-first font-semibold bg-linear-to-r from-[#DE89FF] from-5% to-[#BC13FE] to-100% bg-clip-text text-transparent">{company.name}</h3>
          {company.experiences.map((experience, index) => (
            <div key={index} className="flex flex-col">
              <Accordion isCompact>
                <AccordionItem key={experience.role} aria-label={experience.role} title={experience.role} subtitle={`${experience.start} - ${experience.end} | ${experience.employment_type}`}>
                  {experience.description}
                  <span className='hidden' aria-hidden>{experience.seo_sea_focus}</span>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </li>
      ))}
    </ul>
  )
}