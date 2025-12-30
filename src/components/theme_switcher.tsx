import {useTheme} from "@heroui/use-theme";
import IconSun from "./icons/IconSun";
import IconMoon from "./icons/IconMoon";
import { Button } from "@heroui/react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <Button isIconOnly variant="flat" onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? <IconSun /> : <IconMoon />}
    </Button>
  )
}