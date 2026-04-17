import { Tooltip } from "@heroui/react"
import AutoScroll from "embla-carousel-auto-scroll"
import useEmblaCarousel from "embla-carousel-react"
import tools from "../assets/data/tools.json"

const FALLBACK_ICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' rx='4' fill='%23444'/%3E%3C/svg%3E"

export default function Carousel() {
    const [emblaRef] = useEmblaCarousel({ dragFree: true, loop: true }, [
        AutoScroll({ speed: 0.55, startDelay: 100, stopOnFocusIn: false, stopOnInteraction: false })
    ])

    return (
        <div>
            <div className="mb-12 text-center">
                <h2 className="text-2xl font-bold text-[#DE89FF] uppercase tracking-[0.4em] mb-4">
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
                                        <img
                                            alt={`Logo ${tool.name}`}
                                            className="object-cover"
                                            height={48}
                                            loading="lazy"
                                            onError={(e) => {
                                                e.currentTarget.src = FALLBACK_ICON
                                            }}
                                            src={tool.icon}
                                            width={48}
                                        />
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