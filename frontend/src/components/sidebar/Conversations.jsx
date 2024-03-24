import React from "react";
import OneConversation from "./OneConversation";
import useGetConversations from "../../hooks/useGetConversations";
import { randomEmoji } from "../../utils/getRandomEmoji";

const Conversations = () => {
  const { loading, conversation } = useGetConversations();
 

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversation && conversation.map((conversation, index) => (

        <OneConversation
          key={conversation._id}
          conversation={conversation}
          emoji={randomEmoji()}
          lastIndex={index === conversation.length - 1}
        />
      ))}
    </div>
  );
};

export default Conversations;
