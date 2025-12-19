import type React from 'react'
import { Avatar, Card, CardBody, CardHeader } from '@heroui/react'
import type { Experiences } from '../types/experiences_data'
import IconBuilding from '../icons/IconBuilding'

export default function Experiences_Timeline({ data }: { data: Array<Experiences> }): React.ReactElement {
  return (
    <ol className="relative space-y-8 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-blue-500/75">
      {data.map((item, index) => (
        <li key={index} className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
          <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
            <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

            <div className="-mt-2">
              <Card className="overflow-none border-small border-foreground/10 relative w-[400px]">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Avatar
                      className="object-scale-down w-16 h-16 rounded-full"
                      src={`images/${item.logo}`}
                      showFallback
                      fallback={<IconBuilding />}
                    />
                    <div className=" text-start">
                      <p className="text-large font-medium text-white">{item.company}</p>
                      <p className="text-small text-white/60">{item.company}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardBody className="px-3">
                  <div className="flex flex-col gap-2 px-2">
                    <div>
                      <p className="text-large font-medium text-white/80">{item.company}</p>
                      <p className="text-small text-white/60">{item.company}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>

          <div aria-hidden="true"></div>
        </li>
      ))}
    </ol>
  )
}
