import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import Skeleton from "../Skeleton";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages()
  const lastMessageRef = useRef();

  useEffect(()=> {
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behavior : "smooth"})
    },100)
  }, [messages])

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
         <div ref={lastMessageRef} key={message._id}>
           <Message  message={message} />
         </div>
        ))}

      {loading && <Skeleton />}

      {!loading && messages.length === 0 && (
        <p className="text-center text-gray-600 font-semibold">
          Send a message to start the conversation
        </p>
      )}

      {/* <Message /> */}
    </div>
  );
};

export default Messages;
