import React from "react";
import { Outlet } from "react-router";
import MobileHeader from "../../components/Header/MobileHeader";
import SearchInput from "../../components/common/form/SearchInput";
import useWindowSize from "../../hooks/useWindowSize";
import breakpoints from "../../data/breakpoints";
import { useGetMessages } from "../../hooks/useMessages";
import ConversationItem from "../../components/Messages/ConversationItem";
// import conversations from "../../data/messages";

const Conversations = () => {
  const { width } = useWindowSize();

  const { data } = useGetMessages();

  const isSmall = width <= breakpoints.lg;

  return (
    <div className={`messages-list-page ${isSmall ? "small" : ""}`}>
      <div className="messages-list-conversations">
        <div className="conversations-search-input">
          <MobileHeader title="Messages" />
          <SearchInput />
        </div>

        <div className="conversations-list">
          {data.map((item) => {
            return <ConversationItem key={item.id} conversation={item} />;
          })}
        </div>
      </div>

      {isSmall ? null : (
        <div>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Conversations;
