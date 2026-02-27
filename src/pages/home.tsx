import { Button, Link } from "@heroui/react"
import type { ReactElement } from "react"
import IconCalendar from "../assets/icons/IconCalendar.tsx"
import IconMail from "../assets/icons/IconMail.tsx"
export default function Home(): ReactElement {
    return (
        <div className="z-0 h-svh flex flex-1 flex-col bg-[#0a0c10]">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-105 h-105 bg-[#bc13fe] rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-105 h-105 bg-[#bc13fe] rounded-full blur-[120px]" />
            </div>
            <div className="h-[calc(100svh-4rem)] flex justify-center items-center gap-8">
                <div className="flex flex-col gap-12">
                    <div className="space-y-6 text-center">
                        <h1 className="text-7xl font-bold">Hello there ! I'm DAMOKLES.</h1>
                        <h2 className="text-5xl text-slate-400 font-semibold uppercase mb-8">
                            A Full-stack developer.
                        </h2>
                        <p className=" text-slate-400 text-wrap w-3xl text-center place-self-center text-xl">
                            I turn coffee into code, Trying to build pixel-perfect apps with
                            innovative solutions and suffering to find the best way to solve
                            problems mainly with the help of the JS ecosystem.
                        </p>
                    </div>
                    <div className="w-fit flex flex-col gap-4 self-center">
                        <div className="flex flex-row h-full w-fit p-1 items-center justify-center gap-2">
                            <Button
                                as={Link}
                                href="mailto:bouzon.alexandre@gmail.com"
                                radius="sm"
                                size="sm"
                                startContent={
                                    <IconMail height={24} stroke="currentColor" width={24} />
                                }
                                target="_blank"
                                variant="ghost">
                                Contact Me
                            </Button>
                            <div className=" w-1 h-1 bg-white rounded-full" />
                            <Button
                                as={Link}
                                href="https://cal.com/damokles/rdvvisio"
                                radius="sm"
                                size="sm"
                                startContent={
                                    <IconCalendar height={24} stroke="currentColor" width={24} />
                                }
                                target="_blank"
                                variant="ghost">
                                Book A Call
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
