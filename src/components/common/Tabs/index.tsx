/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const Tabs = ({
  children,
  activeTab,
}: {
  children: React.ReactNode;
  activeTab: string | number;
}) => {
  return React.Children.map(children, (child: any) => {
    return child?.props?.tabId === activeTab ? child : null;
  });
};

export default Tabs;
