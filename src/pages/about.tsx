export default function About() {
    return (
        <section
            aria-labelledby="about-heading"
            className=" py-12 lg:py-24 px-6 border-t border-slate-200/5"
            id="about">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="mb-8 flex flex-col items-center lg:items-start">
                            <h2 className="text-2xl font-bold text-brand-light uppercase tracking-[0.3em] mb-4">
                                About me
                            </h2>
                            <h3 className="text-sm font-bold dark:text-white mb-8">
                                Let's see how deep the rabbit hole goes.
                            </h3>
                        </div>
                        <div className="space-y-6 text-justify md:text-normal">
                            <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                                I'm a Fullstack JavaScript Developer specialized in building
                                high-performance, scalable and production-ready web applications.
                                With a strong focus on{" "}
                                <strong>TypeScript, Node.js, React and Next.js</strong>, I design
                                and develop modern digital products that combine clean architecture,
                                optimized performance and intuitive user experience.
                            </p>

                            <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                                From MVP development to complex platforms, I help businesses turn
                                ideas into robust and maintainable solutions. My approach blends{" "}
                                <strong>software engineering best practices</strong>,
                                <strong>SEO optimization</strong>, and{" "}
                                <strong>performance-driven development</strong> to deliver fast,
                                scalable and user-centric applications.
                            </p>

                            <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                                Beyond frontend and backend development, I bring a strong background
                                in <strong>system administration, networking and DevOps</strong>.
                                This allows me to manage projects end-to-end, from infrastructure
                                design to deployment and monitoring.
                            </p>

                            <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                                Passionate about technology, performance optimization and continuous
                                learning, I constantly explore new tools, frameworks and
                                architectures to stay ahead of the curve. Whether it's improving
                                load times, scaling an API or refining UX, I always aim for
                                excellence and efficiency.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand/20 blur-3xl rounded-full" />
                            <img
                                {...({
                                    fetchpriority: "high"
                                } as React.ImgHTMLAttributes<HTMLImageElement>)}
                                alt="Alexandre Bouzon, développeur fullstack"
                                className="relative rounded-2xl border-2 border-brand/20 shadow-2xl"
                                height={400}
                                loading="eager"
                                src="https://res.cloudinary.com/do18ebswp/image/upload/w_250,h_400,q_auto,f_auto/me_dn185a.webp"
                                width={250}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
