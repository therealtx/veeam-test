import React, { useState, useCallback } from "react";
import c from "classnames";
import styles from "./index.module.scss";

interface ITab {
  label: string;
  content: React.ReactNode
}

interface ITabs {
  tabs: Array<ITab>
}

const Tabs = (props: ITabs): JSX.Element | null => {
  const { tabs } = props;

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleChangeTab = useCallback((tabIndex: number) => {
    setActiveTabIndex(tabIndex);
  }, []);

  if (!tabs.length) return null;

  return (
    <div className={styles.tabs}>
      <div className={styles.tabsHeader}>
        {tabs.map(({ label }, index) => (
          <button
            key={index}
            onClick={() => handleChangeTab(index)}
            className={c({
              [styles.activeTabButton]: activeTabIndex === index
            })}>
            {label}
          </button>
        ))}
      </div>
      <div className={styles.tabsContent}>
        {tabs[activeTabIndex].content}
      </div>
    </div>
  )
};

export default Tabs;
