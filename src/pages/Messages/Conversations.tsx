import React from "react";
import { Outlet } from "react-router";
import MobileHeader from "../../components/Header/MobileHeader";
import SearchInput from "../../components/common/form/SearchInput";
import useWindowSize from "../../hooks/useWindowSize";
import breakpoints from "../../data/breakpoints";

const Conversations = () => {
  const { width } = useWindowSize();

  return (
    <div className="messages-list-page">
      <div>
        <MobileHeader title="Messages" />
        <SearchInput />
      </div>
      {width <= breakpoints.lg ? null : (
        <div>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Conversations;
