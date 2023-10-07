import { useMemo, useState } from "react";
import { conversations } from "../data/messages";
import { TConversation } from "../types/message";

export function useGetMessages() {
  const [list, setList] = useState<TConversation[]>(conversations);

  return {
    data: list,
    setData: setList,
  };
}

export function useGetOneConversation(id: string | number) {
  // const [data, setData] = useState<TConversation>(() => {
  //   return conversations.find((conversation) => conversation.id == id);
  // });

  const data = useMemo(() => {
    return conversations.find((conversation) => conversation.id == id);
  }, [id]);

  return {
    data,
    // setData,
  };
}
