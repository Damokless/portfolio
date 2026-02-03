import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import AutoScroll from 'embla-carousel-auto-scroll'
import ToolsCarouselData from '../data/tools_data.json'
import { Link, Tooltip } from '@heroui/react'

export default function ToolsCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({stopOnInteraction : false, stopOnFocusIn: false}), AutoScroll({ speed: 0.5, stopOnInteraction: false, stopOnFocusIn: false })])

  return (
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {ToolsCarouselData.map(tool => (
            <div key={tool.name} className="md:flex-[0_0_7%] flex-[0_0_15%] flex min-w-0 justify-center items-center gap-4">
              <Link href={tool.url} target="_blank">
                <Tooltip content={tool.name} showArrow>
                  <img src={`assets/${tool.logo}`} alt={tool.name} className=" w-10 h-10 object-contain " />
                </Tooltip>
              </Link>
            </div>
          ))}
        </div>
      </div>
  )
}
