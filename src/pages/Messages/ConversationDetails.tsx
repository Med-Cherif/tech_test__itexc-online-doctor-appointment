import React from "react";
import ContactDetailsHeader from "../../components/Messages/ConversationDetailsHeader";
import { useParams } from "react-router";
import { useGetOneConversation } from "../../hooks/useMessages";
import { HiOutlineDocumentText } from "react-icons/hi";
import ButtonIcon from "../../components/common/Button/ButtonIcon";
import { BsSend } from "react-icons/bs";
import Input from "../../components/common/form/Input";
import MessageItem from "../../components/Messages/MessageItem";

const ConversationDetails = () => {
  const { id } = useParams();

  const { data } = useGetOneConversation(id);

  const { user, messages } = data;

  return (
    <div className="conversation-details">
      <ContactDetailsHeader avatar={user.avatar} name={user.name} />
      <div className="conversation-details-content">
        {messages.map((message) => {
          return <MessageItem key={message.id} message={message} />;
        })}
      </div>
      <div className="conversation-details-footer">
        <HiOutlineDocumentText fontSize={28} />
        <Input placeholder="Write something here" />
        <ButtonIcon className="send-message-button" icon={<BsSend />} />
      </div>
    </div>
  );
};

export default ConversationDetails;
