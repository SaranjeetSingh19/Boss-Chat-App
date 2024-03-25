import React from "react";
import { useAuthContext } from "../../context/authContext";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  const bubbleShake = message.shouldShake ? "shake" : ""

  function formatMongoTimestamp(timestamp) {
    // Convert MongoDB timestamp to JavaScript Date object
    const date = new Date(timestamp);

    // Format the time
    const formattedTime = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }); // Format as 'hh:mm AM/PM'

    return formattedTime;
  }
  const timestampFromMongoDB = message.createdAt;
  const formattedTime = formatMongoTimestamp(timestampFromMongoDB);

  return (
    <div className={`chat ${chatClassName} `}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="Tailwind css chat bubble component " />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} ${bubbleShake} pb-2`} >
        {message.message}{" "} 
      </div>

      <div className="chat-footer opacity-60 text-gray-500 text-xs gap-1 flex items-center">
        {" "}
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
