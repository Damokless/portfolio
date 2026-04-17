import { Button, Link } from "@heroui/react"
import { IconCalendarWeek, IconChevronDown, IconMail } from "@tabler/icons-react"

export default function Home() {
    return (
        <section aria-label="landing" className="z-0 lg:h-svh flex flex-1 flex-col bg-[#0a0c10]">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 lg:w-105 w-30 h-105 bg-[#bc13fe] rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-105 h-105 bg-[#bc13fe] rounded-full blur-[120px]" />
            </div>
            <div className="h-[calc(100svh-4rem)] flex justify-center items-center gap-8">
                <div className="flex flex-col gap-12">
                    <div className="space-y-1 lg:space-y-6 text-center">
                        <h1 className="text-2xl lg:text-7xl font-bold">
                            Hello there ! I'm DAMOKLES.
                        </h1>
                        <p className="text-xl lg:text-5xl text-slate-400 font-semibold uppercase mb-8">
                            A Full-stack developer.
                        </p>
                        <p className=" text-slate-400 text-wrap lg:w-3xl text-center place-self-center lg:text-xl text-sm px-3 md:px-0">
                            I turn coffee into code, Trying to build pixel-perfect apps with
                            innovative solutions and suffering to find the best way to solve
                            problems mainly with the help of the JS ecosystem.
                        </p>
                    </div>
                    <div className="w-fit flex flex-col gap-4 self-center">
                        <div className="flex flex-row h-full w-fit p-1 items-center justify-center gap-2">
                            <Link
                                className="no-underline"
                                href="mailto:bouzon.alexandre@gmail.com"
                                rel="noopener noreferrer"
                                target="_blank">
                                <Button
                                    className=" text-foreground hover:bg-[#27272a]"
                                    variant="outline">
                                    <IconMail className=" size-6" stroke={1} />
                                    Contact Me
                                </Button>
                            </Link>
                            <div className=" w-1 h-1 bg-white rounded-full" />
                            <Link
                                className="no-underline"
                                href="https://cal.com/damokles/rdvvisio"
                                rel="noopener noreferrer"
                                target="_blank">
                                <Button
                                    className=" text-foreground hover:bg-[#27272a]"
                                    variant="outline">
                                    <IconCalendarWeek className=" size-6" stroke={1} />
                                    Book A Call
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="pt-12 flex gap-6 justify-center">
                        <span className="text-primary text-4xl animate-bounce">
                            <IconChevronDown />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
