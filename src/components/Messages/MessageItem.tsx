import { TMessage } from "../../types/message";
import Avatar from "../common/Avatar";
import MessageItemContent from "./MessageItemContent";

interface TProps {
  message: TMessage;
}

const MessageItem = ({ message }: TProps) => {
  const { content, sender, time } = message;
  return (
    <div
      className={`message-item ${sender.name === "Me" ? "user-as-sender" : ""}`}
    >
      <div className="message-item-wrapper">
        {sender.name === "Me" ? (
          <MessageItemContent time={time} content={content} />
        ) : (
          <div className="message-item-recieve">
            <Avatar alt={sender.name} src={sender.avatar} size={38} />
            <MessageItemContent time={time} content={content} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageItem;
