import { Link, useParams } from "react-router-dom";
import { TConversation } from "../../types/message";
import AppointmentUserDetails from "../Appointment/AppointmentUserDetails";
import CountBadge from "../common/CountBadge";

interface TProps {
  conversation: TConversation;
}

const ConversationItem = ({ conversation }: TProps) => {
  const {
    user: { avatar, name },
    id,
    lastMessage: { content, time },
    unseenMessages,
  } = conversation;

  const { id: conversationID } = useParams();

  return (
    <Link to={`/messages/${id}`}>
      <div
        className={`conversation-item ${
          conversationID == id ? "conversation-item-selected" : ""
        }`}
      >
        <AppointmentUserDetails name={name} src={avatar} subTitle={content} />
        <div className="conversation-item-right">
          <span className="conversation-item-right-time">{time}</span>
          {unseenMessages > 0 && (
            <span>{<CountBadge number={unseenMessages} />}</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ConversationItem;
