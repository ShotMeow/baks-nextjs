import { type FC, useState } from "react";
import Button from "@/src/shared/ui/Button";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import Modal from "./Modal";
import { tabsData } from "../constants/tabs";
import { getTabPanelButton } from "../utils/getTabPanels";

const Tabs: FC = () => {
  const [modalShown, setModalShown] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("news");

  return (
    <>
      <TabGroup className="mt-10">
        <TabList className="flex items-center gap-6">
          {tabsData.map((tab) => (
            <Tab
              className="rounded-full px-6 py-3 transition-all hover:bg-zinc-900 data-[selected]:bg-zinc-900"
              key={tab.type}
            >
              {tab.name}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="mt-10">
          {tabsData.map((tab) => (
            <TabPanel key={tab.type}>
              <Button
                onClick={() => {
                  setModalShown(true);
                  setActiveTab(tab.type);
                }}
                variant="transparent"
              >
                {getTabPanelButton(tab.type)} +
              </Button>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
      <Modal activeTab={activeTab} open={modalShown} onClose={setModalShown} />
    </>
  );
};

export default Tabs;
