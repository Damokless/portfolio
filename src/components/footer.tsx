import {
    IconBrandDiscord,
    IconBrandGithub,
    IconBrandLinkedin,
    IconCalendarWeek,
    IconMail
} from "@tabler/icons-react"

export default function Footer() {
    return (
        <div className="py-24 px-6 border-t border-slate-200/5" id="about">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8">
                    <h2 className="text-2xl text-center font-bold text-[#DE89FF] uppercase tracking-wider mb-4">
                        DAMOKLES
                    </h2>
                    <h3 className="text-sm font-bold  mb-8 text-center leading-relaxed text-gray-500 dark:text-gray-400">
                        Passionate about solving complex problems.
                    </h3>
                </div>

                <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                    <li>
                        <a
                            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                            href="#about">
                            About
                        </a>
                    </li>

                    <li>
                        <a
                            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                            href="#career">
                            Careers
                        </a>
                    </li>

                    <li>
                        <a
                            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                            href="#stack">
                            Stack
                        </a>
                    </li>

                    <li>
                        <a
                            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                            href="#certifications">
                            Certifications
                        </a>
                    </li>
                </ul>

                <ul className="mt-12 flex justify-center gap-6 md:gap-8">
                    <li>
                        <a
                            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                            href="mailto:bouzon.alexandre@gmail.com"
                            rel="noreferrer"
                            target="_blank">
                            <span className="sr-only">Email</span>
                            <IconMail size={32} stroke={1} />
                        </a>
                    </li>

                    <li>
                        <a
                            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                            href="https://cal.com/damokles/rdvvisio"
                            rel="noreferrer"
                            target="_blank">
                            <span className="sr-only">Book a call</span>
                            <IconCalendarWeek size={32} stroke={1} />
                        </a>
                    </li>

                    <li>
                        <a
                            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                            href="https://github.com/Damokless"
                            rel="noreferrer"
                            target="_blank">
                            <span className="sr-only">Github</span>
                            <IconBrandGithub size={32} stroke={1} />
                        </a>
                    </li>

                    <li>
                        <a
                            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                            href="https://www.linkedin.com/in/alexandre-bouzon/"
                            rel="noreferrer"
                            target="_blank">
                            <span className="sr-only">Linkedin</span>
                            <IconBrandLinkedin size={32} stroke={1} />
                        </a>
                    </li>

                    <li>
                        <a
                            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                            href="https://discord.com/users/168407745072988161"
                            rel="noreferrer"
                            target="_blank">
                            <span className="sr-only">Discord</span>
                            <IconBrandDiscord size={32} stroke={1} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
