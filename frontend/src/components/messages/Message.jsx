import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end ">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://images.unsplash.com/photo-1710756115964-f949e92b97fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D"
            alt="Tailwind css chat bubble component "
          />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>
        Aur vaiSaab kaisa sb?{" "}
      </div>

      <div className="chat-footer opacity-50 text-xs gap-1 flex items-center">
        {" "}
        12:42
      </div>
    </div>
  );
};

export default Message;
