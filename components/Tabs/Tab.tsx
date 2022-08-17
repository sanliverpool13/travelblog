import React from "react";
import Link from "next/link";
import { TabLink } from "./style";

interface TabProps {
  title: string;
  to: string;
  tabIndex: number;
  activeTabIndex: number;
  onTabClick: (index: number) => void;
}

const Tab: React.FC<TabProps> = ({
  to,
  title,
  tabIndex,
  activeTabIndex,
  onTabClick,
}) => {
  return (
    <TabLink active={tabIndex === activeTabIndex} onClick={onTabClick}>
      <Link href={to}>{title}</Link>
    </TabLink>
  );
};

export default Tab;
