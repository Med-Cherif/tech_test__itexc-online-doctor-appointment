export interface TConversation {
  id: string | number;
  user: TUserMessage;
  lastMessage: TLastMessage;
  unseenMessages: number;
  messages: TMessage[];
}

export interface TUserMessage {
  name: string;
  avatar: string;
}

export interface TLastMessage {
  content: string;
  time: string;
}

export interface TMessage extends TLastMessage {
  id: number | string;
  sender: TUserMessage;
}
