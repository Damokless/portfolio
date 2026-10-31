import { ActionIcon, Burger, Divider, Drawer, Group, ScrollArea } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { useState } from "react"

const links = [
    { link: "#", label: "Projets" },
    { link: "#", label: "Compétences" },
    { link: "#", label: "Outils" },
    { link: "#", label: "Certifications" },
    { link: "#", label: "À propos" },
    { link: "#", label: "Parcours" }
]

export default function Layout({ children }) {
    const [opened, { toggle, close }] = useDisclosure(false)
    const [active, setActive] = useState(links[0].link)

    const items = links.map((link) => (
        <a
            className=""
            data-active={active === link.link || undefined}
            href={link.link}
            key={link.label}
            onClick={(event) => {
                event.preventDefault()
                setActive(link.link)
            }}>
            {link.label}
        </a>
    ))
    return (
        <div>
            <header className="border-b h-20 top-0 z-10 bg-[#0a0c10f5] w-full sticky text-white">
                <nav className="flex justify-between items-center w-full h-full mx-auto">
                    <a href="/">
                        damokles
                        <span className=" text-[#de89ff]">.</span>
                    </a>
                    <Group gap={5} visibleFrom="xs">
                        {items}
                    </Group>

                    <Burger
                        aria-label="Toggle navigation"
                        hiddenFrom="xs"
                        onClick={toggle}
                        opened={opened}
                        size="sm"
                    />
                </nav>

                <Drawer
                    hiddenFrom="xs"
                    onClose={close}
                    opened={opened}
                    padding="md"
                    size="100%"
                    title="Navigation"
                    zIndex={1_000_000}>
                    <ScrollArea h="calc(100vh - 80px" mx="-md">
                        <Divider my="sm" />
                        {items}
                    </ScrollArea>
                </Drawer>
            </header>
            <main>{children}</main>
            <footer className="">
                <div className="">
                    <a href="/">
                        damokles
                        <span className=" text-[#de89ff]">.</span>
                    </a>

                    <Group className="">{items}</Group>

                    <Group gap="xs" justify="flex-end" wrap="nowrap">
                        <ActionIcon aria-label="Twitter" radius="xl" size="lg" variant="default">
                            /
                        </ActionIcon>
                        <ActionIcon aria-label="YouTube" radius="xl" size="lg" variant="default">
                            /
                        </ActionIcon>
                        <ActionIcon aria-label="Instagram" radius="xl" size="lg" variant="default">
                            /
                        </ActionIcon>
                    </Group>
                </div>
            </footer>
        </div>
    )
}
