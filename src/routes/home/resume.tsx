import Edu_Timeline from "../../components/edu_timeline";
import education from "../../data/education_data.json";
import experiences from "../../data/experiences_data.json";
import {Tabs, Tab} from "@heroui/react";
import Experiences_Timeline from "../../components/experiences_timeline";

export default function Resume() {
    console.log(education)
  return (
      <div className="flex flex-col">
        <Tabs aria-label="Options" radius="lg" className="w-full justify-center" >
          <Tab key="Education" title="Education">
              <Edu_Timeline
                data={education}
              />
          </Tab>
          <Tab key="Professional Experience" title="Professional Experience">
              <Experiences_Timeline
                data={experiences}
              />
          </Tab>
        </Tabs>
      </div>
  );
}
