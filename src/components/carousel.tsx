import { Tooltip } from "@heroui/react"
import AutoScroll from "embla-carousel-auto-scroll"
import useEmblaCarousel from "embla-carousel-react"
import toolsData from "../assets/data/tools.json"
import type { Tool } from "../types/index.ts"
import TechIcon from "./tech_icon.tsx"

export default function Carousel() {
    const [emblaRef] = useEmblaCarousel({ dragFree: true, loop: true }, [
        AutoScroll({ speed: 0.55, startDelay: 100, stopOnFocusIn: false, stopOnInteraction: false })
    ])

    const tools: Tool[] = toolsData

    return (
        <div>
            <div className="mb-12 text-center">
                <h2 className="text-2xl font-bold text-brand-light uppercase tracking-[0.4em] mb-4">
                    Tools
                </h2>
                <h3 className="text-sm font-bold dark:text-white mb-8">
                    It's dangerous to code alone ! Take these.
                </h3>
            </div>
            <div className="embla py-12 border-y border-slate-200/5">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-6 lg:gap-0 touch-pan-y touch-pinch-zoom">
                        {tools.map((tool) => (
                            <div
                                className="flex-[0_0_12%] md:flex-[0_0_9%] min-w-0 place-items-center"
                                key={tool.name}>
                                <Tooltip delay={0}>
                                    <Tooltip.Trigger>
                                        <TechIcon alt={tool.name} size={32} src={tool.icon} />
                                    </Tooltip.Trigger>
                                    <Tooltip.Content>
                                        <p>{tool.name}</p>
                                    </Tooltip.Content>
                                </Tooltip>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
