import { Card, Link } from "@heroui/react"
import certificationsData from "../assets/data/certifications.json"
import type { Certification } from "../types/index.ts"

export default function Certifications() {
  const certifications: Certification[] = certificationsData

    return (
        <section
            aria-labelledby="certifications-heading"
            className="py-24 px-6 space-y-12"
            id="certifications">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8 flex flex-col items-center lg:items-start">
                    <h2 className="text-2xl font-bold text-brand-light uppercase tracking-[0.3em] mb-4">
                        Certifications
                    </h2>
                    <h3 className="text-sm font-bold dark:text-white mb-8 text-center lg:text-left">
                        Collecting new skills and masteries like Pokémon Gym Badges.
                    </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 ">
                    {certifications.map((certification) => (
                        <Link
                            className="group w-full no-underline"
                            href={certification.url}
                            key={certification.name}>
                            <Card
                                className="p-6 w-full rounded-xl flex flex-col items-center text-center hover:border-[#bc13fe66] hover:shadow-[0_0_30px_-10px_rgba(188,19,254,0.2)] hover:bg-[#bc13fe0d] border transition"
                                key={certification.name}>
                                <div className="w-16 h-16 mb-4 flex items-center justify-center bg-primary/5 rounded-full border border-primary/20 group-hover:border-brand-light/40">
                                    <img
                                        alt={certification.institution}
                                        className="object-fit rounded-full"
                                        height={48}
                                        src={certification.icon}
                                        width={48}
                                    />
                                </div>
                                <h4 className="font-bold dark:text-white mb-1 text-sm">
                                    {certification.name}
                                </h4>
                                <p className="text-[10px] text-slate-400 uppercase tracking-widest">
                                    {certification.institution}
                                </p>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
