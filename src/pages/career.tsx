import { Tabs } from "@heroui/react"
import education from "../assets/data/education.json"
import work from "../assets/data/work.json"

export default function Career() {
    return (
        <div className="py-24 px-6 " id="about">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-2xl font-bold text-[#DE89FF] uppercase tracking-[0.4em] mb-4">
                        Career
                    </h2>
                    <h3 className="text-sm font-bold dark:text-white mb-8">
                        Passionate about computer science since day one.
                    </h3>
                </div>
                <div className="flex justify-center items-center w-full">
                    <Tabs className="w-full " variant="secondary">
                        <Tabs.ListContainer>
                            <Tabs.List aria-label="Options">
                                <Tabs.Tab id="work">
                                    Work Experience
                                    <Tabs.Indicator className=" bg-[#DE89FF]" />
                                </Tabs.Tab>
                                <Tabs.Tab id="education">
                                    Education
                                    <Tabs.Indicator className=" bg-[#DE89FF]" />
                                </Tabs.Tab>
                            </Tabs.List>
                        </Tabs.ListContainer>
                        <Tabs.Panel className="pt-8" id="work">
                            <div className="relative pl-8 border-l border-primary/20 space-y-16 max-w-2xl mx-auto">
                                {work.map((company) => (
                                    <div className="relative" key={company.name}>
                                        <div className="absolute -left-10.25 top-0 w-4 h-4 rounded-full bg-primary/40 border-4 border-background-dark" />
                                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-1">
                                            {company.duration}
                                        </span>
                                        <h5 className="text-2xl font-bold dark:text-white mb-4">
                                            {company.name}
                                        </h5>
                                        {company.positions.length === 1 && (
                                            <>
                                                <p className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">
                                                    Software Developer
                                                </p>
                                                <p className="text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                                                    Digitalizing internal workflows and urban social
                                                    housing data management systems with focus on
                                                    React/Node stacks.
                                                </p>
                                            </>
                                        )}
                                        {company.positions.length > 1 && (
                                            <div className="space-y-8">
                                                {company.positions.map((experience) => (
                                                    <div
                                                        className="relative pl-6 border-l-2 border-slate-700/50"
                                                        key={
                                                            experience.position + experience.start
                                                        }>
                                                        <p className="text-lg font-bold text-slate-800 dark:text-slate-200">
                                                            {experience.position} -{" "}
                                                            {experience.contract}
                                                        </p>
                                                        <p className="text-base text-slate-500 dark:text-slate-400 font-light mt-2 leading-relaxed">
                                                            Leading architectural decisions for
                                                            critical network management tools,
                                                            ensuring 99.9% reliability and
                                                            pixel-perfect interfaces.
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </Tabs.Panel>
                        <Tabs.Panel className="pt-8 w-full" id="education">
                            <div className="relative pl-8 border-l border-primary/20 space-y-16 max-w-2xl mx-auto">
                                {education.map((school) => (
                                    <div className="relative group" key={school.degree}>
                                        <div className="absolute -left-10.25 top-0 w-4 h-4 rounded-full border-4 bg-[#2c2829] group-hover:bg-[#bc13fe] group-hover:border-[#bc13fe]" />
                                        <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-1">
                                            {school.start} — {school.end}
                                        </span>
                                        <h5 className="text-2xl font-bold dark:text-white mb-2">
                                            {school.institution}
                                        </h5>
                                        <p className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">
                                            {school.degree}
                                        </p>
                                        <p className="text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                                            Specialization in Distributed Systems and Web
                                            Technologies. High honors graduate with focus on
                                            high-performance architecture.
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </Tabs.Panel>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
