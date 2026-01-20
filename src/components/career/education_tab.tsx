import education from '../../data/education_data.json'

export default function EducationTab() {
  return (
    <ul role="list" className="m-8 max-w-3xl">
      {education.map((school, index) => (
        <li key={index} className="group relative flex flex-col py-4 pl-14 last:pb-0">
          <div className="absolute bottom-0 left-[calc(1.5rem-0.5px)] top-0 w-px bg-default-400 group-first:top-3"></div>
          <div className="absolute left-0 top-2 h-12 w-12 rounded-full bg-content1 border border-default-400 p-0.5 overflow-hidden">
            <img src={`/images/${school.logo}`} alt={school.institution} className="h-full w-full object-cover rounded-full" />
          </div>
          <h3 className=" text-sm/6 font-semibold text-white">{school.institution} | {school.location}</h3>
          <p className="font-display text-2xs/6 order-first font-semibold bg-linear-to-r from-[#DE89FF] from-5% to-[#BC13FE] to-100% bg-clip-text text-transparent">
            {school.years}
          </p>
          <p className="mt-0.5 text-sm/6 text-zinc-400">
            {school.degree}, {school.level} | {school.type}
          </p>
        </li>
      ))}
    </ul>
  )
}
