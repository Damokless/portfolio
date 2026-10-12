import { Button, Card, Text, Title } from "@mantine/core"

export default function App() {
    return (
        <main className="min-h-screen bg-gray-100 p-8">
            <Card className="mx-auto max-w-md" padding="xl" radius="lg" shadow="sm">
                <Title order={2}>Bienvenue</Title>
                <Text className="mt-4">Mantine + Tailwind CSS + Bun</Text>
                <Button className="mt-6">Commencer</Button>
            </Card>
        </main>
    )
}
