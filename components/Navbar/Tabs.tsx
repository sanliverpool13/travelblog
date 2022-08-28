import React, { useState } from "react";
import Link from "next/link";
import { TabsUl, TabLi } from "./tabs.style";
import { useRecoilState } from "recoil";
import { tabsState } from "../../context/state";

const tabTypes = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Blog", to: "/blog" },
  { name: "Contact", to: "/contact" },
];

interface Props {
  mobile: boolean;
  onClose?: () => void;
}

const Tabs: React.FC<Props> = ({ mobile, onClose }) => {
  const [activeTab, setActiveTab] = useRecoilState(tabsState);

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (onClose) {
      onClose();
    }
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
        mobile={mobile}
      />
    );
  });
  return <TabsUl mobile={mobile}>{tabElements}</TabsUl>;
};

interface TabProps {
  title: string;
  to: string;
  tabIndex: number;
  activeTabIndex: number;
  onTabClick: (index: number) => void;
  mobile: boolean;
}

const Tab: React.FC<TabProps> = ({
  to,
  title,
  tabIndex,
  activeTabIndex,
  onTabClick,
  mobile,
}) => {
  return (
    <TabLi
      active={tabIndex === activeTabIndex}
      onClick={onTabClick}
      mobile={mobile}
    >
      <Link href={to}>{title}</Link>
    </TabLi>
  );
};

export default Tabs;
