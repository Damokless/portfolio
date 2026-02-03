import { Card, CardBody, Tab, Tabs } from "@heroui/react";
import EducationTab from "../components/education_tab";
import ExperienceTab from "../components/experience_tab";

export default function Career() {
  return (
    <div className="dark:bg-default-100/65 bg-default-100 bg-clip-padding px-12 md:px-24 py-12 flex flex-col gap-16">
      <div className="flex flex-col">
        <Card className="max-w-full ">
          <CardBody className="overflow-hidden">
            <Tabs fullWidth aria-label="Tabs form" size="md">
              <Tab key="experiences" title="EXPERIENCES">
                <ExperienceTab />
              </Tab>
              <Tab key="educations" title="EDUCATIONS">
                <EducationTab />
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}