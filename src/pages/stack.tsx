import { Card } from "@heroui/react"
import {
    IconCloud,
    IconCode,
    IconDatabase,
    IconDeviceDesktopCode,
    IconStackBack,
    IconStackFront
} from "@tabler/icons-react"
import stack from "../assets/data/stack.json"
import Carousel from "../components/carousel.tsx"

export default function Stack() {
    return (
        <section aria-labelledby="stack-heading" className="py-24 px-6 space-y-12" id="stack">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8 flex flex-col items-center lg:items-start">
                    <h2 className="text-2xl font-bold text-[#DE89FF] uppercase tracking-[0.3em] mb-4">
                        Stack
                    </h2>
                    <h3 className="text-sm text-center lg:text-start font-bold dark:text-white mb-8">
                        Collecting new skills and masteries like Pokémon Gym Badges.
                    </h3>
                    <p className="text-slate-500 text-center lg:text-start dark:text-slate-400 font-light leading-relaxed max-w-2xl">
                        My ecosystem revolves around modern JavaScript/TypeScript, leveraging
                        industry-leading frameworks and infrastructure to build scalable,
                        high-performance digital products.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                    <Card className="h-82.5 col-span-12 rounded-lg transition hover:-translate-y-1 border">
                        <Card.Header>
                            <Card.Title className="flex gap-3 items-center justify-center lg:justify-start">
                                <IconStackFront stroke={1} />
                                <h4 className="text-lg font-bold dark:text-white uppercase tracking-wider">
                                    Frontend
                                </h4>
                            </Card.Title>
                            <Card.Content className="flex flex-row flex-wrap justify-center gap-y-4 gap-x-2 pt-4">
                                {stack.frontend.map((framework) => (
                                    <div
                                        className="w-[22%] min-w-17.5 p-2 rounded-lg text-xs font-medium flex flex-col items-center gap-3 justify-center"
                                        key={framework.name}>
                                        <img
                                            alt={framework.name}
                                            height={32}
                                            src={framework.icon}
                                            width={32}
                                        />
                                        <span className="hidden md:block text-center truncate w-full">
                                            {framework.name}
                                        </span>
                                    </div>
                                ))}
                            </Card.Content>
                        </Card.Header>
                    </Card>
                    <Card className="h-82.5 col-span-12 lg:col-span-4 rounded-lg transition hover:-translate-y-1 border">
                        <Card.Header>
                            <Card.Title className="flex gap-3 items-center justify-center lg:justify-start">
                                <IconStackBack stroke={1} />
                                <h4 className="text-lg font-bold dark:text-white uppercase tracking-wider">
                                    Backend
                                </h4>
                            </Card.Title>
                            <Card.Content className="flex flex-row flex-wrap justify-center gap-y-4 gap-x-2 pt-4">
                                {stack.backend.map((techno) => (
                                    <div
                                        className="w-[22%] min-w-17.5 p-2 rounded-lg text-xs font-medium flex flex-col items-center gap-3 justify-center"
                                        key={techno.name}>
                                        <img
                                            alt={techno.name}
                                            height={24}
                                            src={techno.icon}
                                            width={24}
                                        />
                                        <span className="hidden md:block text-center truncate w-full">
                                            {techno.name}
                                        </span>
                                    </div>
                                ))}
                            </Card.Content>
                        </Card.Header>
                    </Card>
                    <Card className="h-82.5 col-span-12 lg:col-span-4 rounded-lg transition hover:-translate-y-1 border">
                        <Card.Header>
                            <Card.Title className="flex gap-3 items-center justify-center lg:justify-start">
                                <IconCode stroke={1} />
                                <h4 className="text-lg font-bold dark:text-white uppercase tracking-wider">
                                    Languages
                                </h4>
                            </Card.Title>
                            <Card.Content className="flex flex-row flex-wrap justify-center gap-y-4 gap-x-2 pt-4">
                                {stack.languages.map((language) => (
                                    <div
                                        className="w-[22%] min-w-17.5 p-2 rounded-lg text-xs font-medium flex flex-col items-center gap-3 justify-center"
                                        key={language.name}>
                                        <img
                                            alt={language.name}
                                            height={32}
                                            src={language.icon}
                                            width={32}
                                        />
                                        <span className="hidden md:block text-center truncate w-full">
                                            {language.name}
                                        </span>
                                    </div>
                                ))}
                            </Card.Content>
                        </Card.Header>
                    </Card>
                    <Card className="h-82.5 col-span-12 lg:col-span-4 rounded-lg transition hover:-translate-y-1 border">
                        <Card.Header>
                            <Card.Title className="flex gap-3 items-center justify-center lg:justify-start">
                                <IconDatabase stroke={1} />
                                <h4 className="text-lg font-bold dark:text-white uppercase tracking-wider">
                                    Databases
                                </h4>
                            </Card.Title>
                            <Card.Content className="flex flex-row flex-wrap justify-center gap-y-4 gap-x-2 pt-4">
                                {stack.databases.map((database) => (
                                    <div
                                        className="w-[22%] min-w-17.5 p-2 rounded-lg text-xs font-medium flex flex-col items-center gap-3 justify-center"
                                        key={database.name}>
                                        <img
                                            alt={database.name}
                                            height={24}
                                            src={database.icon}
                                            width={24}
                                        />
                                        <span className="hidden md:block text-center truncate w-full">
                                            {database.name}
                                        </span>
                                    </div>
                                ))}
                            </Card.Content>
                        </Card.Header>
                    </Card>
                    <Card className="h-82.5 col-span-12 lg:col-span-8 rounded-lg transition hover:-translate-y-1 border">
                        <Card.Header>
                            <Card.Title className="flex gap-3 items-center justify-center lg:justify-start">
                                <IconDeviceDesktopCode stroke={1} />
                                <h4 className="text-lg font-bold dark:text-white uppercase tracking-wider">
                                    Admin Sys & Network
                                </h4>
                            </Card.Title>
                            <Card.Content className="flex flex-row flex-wrap justify-center gap-y-4 gap-x-2 pt-4">
                                {stack.admin_sys.map((service) => (
                                    <div
                                        className="w-[22%] min-w-17.5 p-1 lg:p-2 rounded-lg text-xs font-medium flex flex-col items-center gap-3 justify-center"
                                        key={service.name}>
                                        <img
                                            alt={service.name}
                                            height={24}
                                            src={service.icon}
                                            width={24}
                                        />
                                        <span className="hidden md:block text-center truncate w-full">
                                            {service.name}
                                        </span>
                                    </div>
                                ))}
                            </Card.Content>
                        </Card.Header>
                    </Card>
                    <Card className="h-82.5 col-span-12 lg:col-span-4 rounded-lg transition hover:-translate-y-1 border">
                        <Card.Header>
                            <Card.Title className="flex gap-3 items-center justify-center lg:justify-start">
                                <IconCloud stroke={1} />
                                <h4 className="text-lg font-bold dark:text-white uppercase tracking-wider">
                                    Cloud
                                </h4>
                            </Card.Title>
                            <Card.Content className="flex flex-row flex-wrap justify-center gap-y-4 gap-x-2 pt-4">
                                {stack.clouds.map((cloud) => (
                                    <div
                                        className="w-[22%] min-w-17.5 p-2 rounded-lg text-xs font-medium flex flex-col items-center gap-3 justify-center"
                                        key={cloud.name}>
                                        <img
                                            alt={cloud.name}
                                            height={24}
                                            src={cloud.icon}
                                            width={24}
                                        />
                                        <span className="hidden md:block text-center truncate w-full">
                                            {cloud.name}
                                        </span>
                                    </div>
                                ))}
                            </Card.Content>
                        </Card.Header>
                    </Card>
                </div>
            </div>
            <div>
                <Carousel />
            </div>
        </section>
    )
}
