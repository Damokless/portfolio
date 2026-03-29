import { Card } from "@heroui/react"
import { IconCloud, IconCode, IconDatabase, IconDeviceDesktopCode, IconStackBack, IconStackFront } from "@tabler/icons-react"

export default function Stack() {
    return (
        <div className="py-24 px-6" id="stack">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[#DE89FF] uppercase tracking-[0.3em] mb-4">
                        Stack
                    </h2>
                    <h3 className="text-sm font-bold dark:text-white mb-8">
                        Collecting new skills and masteries like Pokémon Gym Badges.
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-2xl">
                        My ecosystem revolves around modern JavaScript/TypeScript, leveraging
                        industry-leading frameworks and infrastructure to build scalable,
                        high-performance digital products.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                    <Card className="h-82.5 col-span-8 rounded-lg">
                        <Card.Header>
                            <Card.Title className="flex gap-3 items-center">
                                <IconCode stroke={1} />
                                <h4 className="text-lg font-bold dark:text-white uppercase tracking-wider">
                                    Languages
                                </h4>
                            </Card.Title>
                            <Card.Description>
                                my languages
                            </Card.Description>
                        </Card.Header>
                    </Card>
                    <Card className="h-82.5 col-span-4 rounded-lg">
                        <Card.Header>
                            <Card.Title className="flex gap-3 items-center">
                                <IconCloud stroke={1} />
                                <h4 className="text-lg font-bold dark:text-white uppercase tracking-wider">
                                    Cloud
                                </h4>
                            </Card.Title>
                            <Card.Description>
                              cloud i use
                            </Card.Description>
                        </Card.Header>
                    </Card>
                    <Card className="h-82.5 col-span-4 rounded-lg">
                        <Card.Header>
                            <Card.Title className="flex gap-3 items-center">
                                <IconStackFront stroke={1} />
                                <h4 className="text-lg font-bold dark:text-white uppercase tracking-wider">
                                    Frontend
                                </h4>
                            </Card.Title>
                            <Card.Description>
                              frameworks i use
                            </Card.Description>
                        </Card.Header>
                    </Card>
                    <Card className="h-82.5 col-span-4 rounded-lg">
                        <Card.Header>
                            <Card.Title className="flex gap-3 items-center">
                                <IconStackBack stroke={1} />
                                <h4 className="text-lg font-bold dark:text-white uppercase tracking-wider">
                                    Backend
                                </h4>
                            </Card.Title>
                            <Card.Description>
                              stack that i use
                            </Card.Description>
                        </Card.Header>
                    </Card>
                    <Card className="h-82.5 col-span-4 rounded-lg">
                        <Card.Header>
                            <Card.Title className="flex gap-3 items-center">
                                <IconDatabase stroke={1} />
                                <h4 className="text-lg font-bold dark:text-white uppercase tracking-wider">
                                  Databases
                                </h4>
                            </Card.Title>
                            <Card.Description>
                              how i store my data
                            </Card.Description>
                        </Card.Header>
                    </Card>
                    <Card className="h-82.5 col-span-12 rounded-lg">
                        <Card.Header>
                            <Card.Title className="flex gap-3 items-center">
                                <IconDeviceDesktopCode stroke={1} />
                                <h4 className="text-lg font-bold dark:text-white uppercase tracking-wider">
                                  Admin Sys & Network
                                </h4>
                            </Card.Title>
                            <Card.Description>
                              Some other stuff related to computers
                            </Card.Description>
                        </Card.Header>
                    </Card>
                </div>
            </div>
        </div>
    )
}
