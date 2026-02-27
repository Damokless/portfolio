import type { ReactElement } from "react"
import Avatar from "../assets/images/me.webp"

export default function About(): ReactElement {
    return (
        <div className="py-24 px-6 border-t border-slate-200/5" id="about">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="mb-12">
                            <h2 className="text-xs font-bold text-[#DE89FF] uppercase tracking-[0.4em] mb-4">
                              About me
                            </h2>
                            <h3 className="text-4xl font-bold dark:text-white mb-8">
                                Passionate about solving complex problems.
                            </h3>
                        </div>
                        <div className="space-y-6">
                            <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                                My journey as a developer is driven by a deep-seated curiosity about
                                how things work. From my early days in engineering school to leading
                                architectural decisions for major infrastructure projects, I've
                                always been fascinated by the intersection of complex logic and
                                intuitive design.
                            </p>
                            <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                                Specializing in the modern JavaScript ecosystem, I thrive on the
                                challenge of building scalable products from the ground up.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#bc13fe]/20 blur-3xl rounded-full" />
                            <img
                                alt="Damokles profile"
                                className="relative rounded-2xl border-2 border-[#bc13fe]/20 shadow-2xl"
                                height={400}
                                src={Avatar}
                                width={250}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
