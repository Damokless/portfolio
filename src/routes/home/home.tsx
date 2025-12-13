import { Button } from "@heroui/react";
import Resume from "./resume.tsx";

export default function Home() {
    return (
        <>
            <div>
                <Button color="primary" variant="flat">
                    click me
                </Button>
            </div>
            <Resume />
        </>
    );
}
