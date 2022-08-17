import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { TabsUl } from "./style";
import Tab from "./Tab";

const tabTypes = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Blog", to: "/blog" },
  { name: "Contact", to: "/contact" },
];

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabElements = tabTypes.map((tab, index) => {
    return (
      <Tab
        key={`${tab.name}-${index}`}
        title={tab.name}
        to={tab.to}
        tabIndex={index}
        activeTabIndex={activeTab}
        onTabClick={() => handleTabClick(index)}
      />
    );
  });

  return <TabsUl>{tabElements}</TabsUl>;
};

export default Tabs;
