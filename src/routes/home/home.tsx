import { Button } from "@heroui/react";
import Resume from "./resume.tsx";

export default function Home() {
    return (
        <>
            <div>
                <Button color="primary" variant="flat">
                  Home
                </Button>
                <Button color="primary" variant="flat">
                  Career ( two sections : Companies that trusted me & Education)
                </Button>
                <Button color="primary" variant="flat">
                  Skills - tools  (Languages, Frameworks, Libraries, Tools)
                </Button>
                <Button color="primary" variant="flat">
                  Certifications
                </Button>
                <Button color="primary" variant="flat">
                  Projects
                </Button>
                <Button color="primary" variant="flat">
                  Contact ( Email, call booking, LinkedIn, GitHub, Resume,)
                </Button>
            </div>
            <Resume />
        </>
    );
}
