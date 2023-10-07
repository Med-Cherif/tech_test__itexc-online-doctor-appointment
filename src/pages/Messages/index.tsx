import React from "react";
// import MobileHeader from "../../components/Header/MobileHeader";
// import SearchInput from "../../components/common/form/SearchInput";
import { Route, Routes } from "react-router";
import Conversations from "./Conversations";
import ConversationDetails from "./ConversationDetails";
import useWindowSize from "../../hooks/useWindowSize";
import breakpoints from "../../data/breakpoints";

const Messages = () => {
  const { width } = useWindowSize();
  return (
    <div className="messages">
      {width <= breakpoints.lg ? (
        <Routes>
          <Route path="/" element={<Conversations />} />
          <Route path=":id" element={<ConversationDetails />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Conversations />}>
            <Route path=":id" element={<ConversationDetails />} />
          </Route>
        </Routes>
      )}
    </div>
  );
};

export default Messages;
