import { Card, CardBody, Tab, Tabs } from "@heroui/react";
import EducationTab from "../components/education_tab";
import ExperienceTab from "../components/experience_tab";

export default function Career() {
  return (
    <div className="dark:bg-default-100/65 bg-default-100 bg-clip-padding px-12 md:px-24 py-12 flex flex-col gap-16 w-full">
      <div className="flex flex-col justify-center items-center">
        <Card className=" w-3/4">
          <CardBody className="overflow-hidden">
            <Tabs fullWidth aria-label="Tabs form" size="md">
              <Tab key="experiences" title="EXPERIENCES">
                <div className="flex justify-center items-center">
                  <ExperienceTab />
                </div>
              </Tab>
              <Tab key="educations" title="EDUCATIONS">
                <div className="flex justify-center items-center">
                  <EducationTab />
                </div>
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}