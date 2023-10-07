import React from "react";

interface TProps {
  content: string;
  time: string;
}

const MessageItemContent = ({ content, time }: TProps) => {
  return (
    <div className="message-item-content_time">
      <div className={`message-item-content`}>{content}</div>
      <p className="message-item-time">{time}</p>
    </div>
  );
};

export default MessageItemContent;
