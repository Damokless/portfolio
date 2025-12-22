import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import AutoScroll from 'embla-carousel-auto-scroll'
import ToolsCarouselData from './tools_data.json'
import { Link, Tooltip } from '@heroui/react'

export default function ToolsCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({stopOnInteraction : false, stopOnFocusIn: false}), AutoScroll({ speed: 0.5, stopOnInteraction: false, stopOnFocusIn: false })])

  return (
    <div className=' flex flex-col gap-12'>
      <span className="flex items-center justify-start mt-6 hover:scale-110 transition group">
        <span className="h-0.5 flex-1 bg-linear-to-r from-transparent dark:to-gray-600"></span>
        <span className="shrink-0 px-8 text-gray-400 text-2xl font-semibold">Some <span className='bg-linear-to-r from-[#bc13fe] to-[#DE89FF] bg-clip-text text-transparent'>Tools</span> I use to build my projects</span>
        <span className="h-0.5 flex-1 bg-linear-to-l from-transparent dark:to-gray-600"></span>
      </span>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {ToolsCarouselData.map(tool => (
            <div key={tool.name} className="flex-[0_0_7%] flex min-w-0 justify-center items-center gap-4">
              <Link href={tool.url} target="_blank">
                <Tooltip content={tool.name} showArrow>
                  <img src={`assets/${tool.logo}`} alt={tool.name} className=" w-10 h-10 object-contain " />
                </Tooltip>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
