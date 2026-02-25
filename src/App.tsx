import { Button } from "@heroui/react"
import type {ReactElement} from "react"

export default function App() : ReactElement {
  return (
    <div>
      <p className="text-3xl text-pink-500">Hello tailwindcss and heroui!</p>
      <Button color="primary" variant="bordered">test</Button>
    </div>
  )
}
