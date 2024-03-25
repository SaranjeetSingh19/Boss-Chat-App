import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const OneConversation = ({ conversation, lastIndex, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex items-center gap-2 hover:bg-sky-500 rounded p-2 py-1 cursor-pointer 
      ${isSelected ? "bg-sky-500" : ""}
      `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-2 justify-between">
            <p className="font-bold text-gray-600">{conversation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIndex ? <div className="divider my-0 py-0 h-1"></div> : ""}
    </>
  );
};

export default OneConversation;
