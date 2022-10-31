import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { TabsUl, TabLi } from "./tabs.style";
import { useRecoilState } from "recoil";
import { tabsState } from "../../context/state";
import { updateActiveTabFromURL } from "./helpers";

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
  const router = useRouter();
  const urlPath = router.pathname;

  const [activeTab, setActiveTab] = useRecoilState(tabsState);

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (onClose) {
      onClose();
    }
  };

  // Update active tab from url on refresh
  useEffect(() => {
    let updatedActiveTabIndex: number = updateActiveTabFromURL(urlPath);
    setActiveTab(updatedActiveTabIndex);
  }, [urlPath]);

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
