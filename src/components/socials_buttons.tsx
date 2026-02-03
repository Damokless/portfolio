import { Button, Tooltip, Link } from '@heroui/react'
import IconLinkedin from '../icons/IconLinkedin'
import IconGithub from '../icons/IconGithub'
import IconDiscord from '../icons/IconDiscord'
import IconFile from '../icons/IconFile'

export default function SocialsButtons() {
  return (
    <>
      <Button
        as={Link}
        href="https://www.linkedin.com/in/alexandre-bouzon/"
        target="_blank"
        isIconOnly
        variant="flat"
        className=" hover:text-[#bc13fe] hover:scale-110 shadow-lg"
      >
        <IconLinkedin />
      </Button>
      <Button
        as={Link}
        href="https://github.com/Damokless"
        target="_blank"
        isIconOnly
        variant="flat"
        className=" hover:text-[#bc13fe] hover:scale-110 shadow-lg"
      >
        <IconGithub />
      </Button>
      <Tooltip content="damokles_" showArrow={true}>
        <Button isIconOnly variant="flat" className=" hover:text-[#bc13fe] hover:scale-110 shadow-lg">
          <IconDiscord />
        </Button>
      </Tooltip>
      <Button
        as={Link}
        href="https://docs.google.com/document/d/17wHqqEzjqLWKSFcKFtiyubcKa1VNgg140MzolJ454wA/edit?usp=sharing"
        target="_blank"
        isIconOnly
        variant="flat"
        className=" hover:text-[#bc13fe] hover:scale-110 shadow-lg"
      >
        <IconFile />
      </Button>
    </>
  )
}
