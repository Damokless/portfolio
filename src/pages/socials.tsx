import { Link } from "@heroui/react"
import { IconBrandGithub, IconBrandLinkedin, IconFileCv } from "@tabler/icons-react"
import { LINKS } from "../config/links.ts"

export default function Socials() {
    return (
        <section aria-labelledby="socials-heading" className="py-24 px-6 ">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-2xl font-bold text-brand-light uppercase tracking-wider mb-4">
                        These are the links you're looking for
                    </h2>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-8 mb-16">
                    <Link
                        className="group flex flex-col items-center gap-3 no-underline"
                        href={LINKS.linkedin}
                        rel="noopener noreferrer"
                        target="_blank">
                        <div className="w-14 h-14 rounded-full border border-slate-800 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all group-hover:shadow-[0_0_20px_rgba(188,19,254,0.4)]">
                            <IconBrandLinkedin size={32} stroke={1} />
                        </div>
                        <span className="text-xs uppercase tracking-widest text-slate-400 font-bold group-hover:text-primary transition-colors">
                            LinkedIn
                        </span>
                    </Link>
                    <Link
                        className="group flex flex-col items-center gap-3 no-underline"
                        href={LINKS.github}
                        rel="noopener noreferrer"
                        target="_blank">
                        <div className="w-14 h-14 rounded-full border border-slate-800 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all group-hover:shadow-[0_0_20px_rgba(188,19,254,0.4)]">
                            <IconBrandGithub size={32} stroke={1} />
                        </div>
                        <span className="text-xs uppercase tracking-widest text-slate-400 font-bold group-hover:text-primary transition-colors">
                            GitHub
                        </span>
                    </Link>
                    <Link
                        className="group flex flex-col items-center gap-3 no-underline"
                        href={LINKS.cv}
                        rel="noopener noreferrer"
                        target="_blank">
                        <div className="w-14 h-14 rounded-full border border-slate-800 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all group-hover:shadow-[0_0_20px_rgba(188,19,254,0.4)]">
                            <IconFileCv size={32} stroke={1} />
                        </div>
                        <span className="text-xs uppercase tracking-widest text-slate-400 font-bold group-hover:text-primary transition-colors">
                            CV
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    )
}
