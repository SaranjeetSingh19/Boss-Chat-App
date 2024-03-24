import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessages from "../../hooks/useSendMessages";

const MessageInput = () => {

  const [message, setMessage] = useState("")
  const { loading, sendMessage } = useSendMessages()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message) return
    await sendMessage(message);
    setMessage("")
  }
  return (
    <div>
      <form className="px-4 my-3" onSubmit={handleSubmit}>
        <div className="w-full relative">
          <input
            type="text"
            className="border text-sm rounded-lg block p-2.5 w-full bg-gray-700 border-gray-600 text-white "
            placeholder="Send a message" 
            value={message}
            onChange={(e)=> setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="absolute inset-y-0 end-0 flex items-center pe-3"
          >
            {loading ? <div className="loading loading-spinner"></div> : <BsSend /> }
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
