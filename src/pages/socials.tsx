import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconFileCv
} from "@tabler/icons-react"

export default function Socials() {
    return (
        <div className="py-24 px-6 " id="about">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-2xl font-bold text-[#DE89FF] uppercase tracking-wider mb-4">
                      These are the links you're looking for
                    </h2>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-8 mb-16">
                    <a className="group flex flex-col items-center gap-3" href="/">
                        <div className="w-14 h-14 rounded-full border border-slate-800 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all group-hover:shadow-[0_0_20px_rgba(188,19,254,0.4)]">
                            <IconBrandLinkedin size={32} stroke={1} />
                        </div>
                        <span className="text-xs uppercase tracking-widest text-slate-500 font-bold group-hover:text-primary transition-colors">
                            LinkedIn
                        </span>
                    </a>
                    <a className="group flex flex-col items-center gap-3" href="/">
                        <div className="w-14 h-14 rounded-full border border-slate-800 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all group-hover:shadow-[0_0_20px_rgba(188,19,254,0.4)]">
                            <IconBrandGithub size={32} stroke={1} />
                        </div>
                        <span className="text-xs uppercase tracking-widest text-slate-500 font-bold group-hover:text-primary transition-colors">
                            GitHub
                        </span>
                    </a>
                    <a className="group flex flex-col items-center gap-3" href="/">
                        <div className="w-14 h-14 rounded-full border border-slate-800 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all group-hover:shadow-[0_0_20px_rgba(188,19,254,0.4)]">
                            <IconFileCv size={32} stroke={1} />
                        </div>
                        <span className="text-xs uppercase tracking-widest text-slate-500 font-bold group-hover:text-primary transition-colors">
                            CV
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}
