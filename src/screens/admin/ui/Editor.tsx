import { type FC, useState } from "react";
import { Tabs } from "@gravity-ui/uikit";

import Button from "@/src/shared/ui/Button";

import { tabs } from "../constants/tabs";
import type { TabType } from "../types/tabs.types";
import List from "./List";
import { getTabPanelButton } from "../utils/getTabPanels";
import FormModal from "./modals/FormModal";

const Editor: FC = () => {
  const [activeTab, setActiveTab] = useState<TabType["type"]>(tabs[0].type);
  const [modalShown, setModalShown] = useState<boolean>(false);
  return (
    <div className="w-full">
      <Tabs
        className="my-4"
        size="xl"
        activeTab={activeTab}
        items={tabs.map((tab) => {
          return {
            id: tab.type,
            title: tab.name,
          };
        })}
        onSelectTab={(tabId) =>
          setActiveTab(
            tabs.find((tab) => tab.type === tabId)?.type || tabs[0].type,
          )
        }
      />
      <List type={activeTab}>
        {activeTab !== "players" && (
          <Button
            onClick={() => {
              setModalShown(true);
            }}
            variant="transparent"
            className="w-full"
          >
            {getTabPanelButton(activeTab)} +
          </Button>
        )}
      </List>
      <FormModal
        activeTab={activeTab}
        open={modalShown}
        onClose={setModalShown}
      />
    </div>
  );
};

export default Editor;
