import Edu_Timeline from "../../components/edu_timeline";
import education from "../../data/education_data.json";
import {Tabs, Tab, Card, CardBody} from "@heroui/react";

export default function Resume() {
    console.log(education)
  return (
      <div className="flex w-full flex-col">
        <Tabs aria-label="Options" radius="lg" >
          <Tab key="Education" title="Education">
              <Edu_Timeline
                data={education}
              />
          </Tab>
          <Tab key="Professional Experience" title="Professional Experience">
            <Card>
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
  );
}
