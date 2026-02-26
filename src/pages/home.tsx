import { Button, Link } from "@heroui/react"
import type { ReactElement } from "react"
export default function Home(): ReactElement {
    return (
        <div className="h-svh  flex flex-col bg-[#0a0c10]">
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#bc13fe] rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#bc13fe] rounded-full blur-[120px]" />
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
                                startContent={<div className="w-6 h-6" />}
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
                                startContent={<div className="w-6 h-6" />}
                                target="_blank"
                                variant="ghost">
                                Book A Call
                            </Button>
                        </div>
                        <span className="flex items-center justify-start mt-6 hover:scale-110 transition group shadow-lg">
                            <span className="h-px flex-1 bg-linear-to-r from-transparent dark:to-gray-600" />
                            <span className="shrink-0 px-2 text-gray-400 text-xs">
                                <span className=" hidden group-hover:inline-block">👇🏼</span>If You
                                need more ways to contact me
                                <span className=" hidden group-hover:inline-block">👇🏼</span>
                            </span>
                            <span className="h-px flex-1 bg-linear-to-l from-transparent dark:to-gray-600" />
                        </span>
                        <div className="flex w-full justify-evenly">
                            <div className="w-6 h-6" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
